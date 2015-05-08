/*!
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

var path = require('path'),
    fs = require("fs"),
    sprintf = require('./phantomjs/sprintf').sprintf;

function Platform(config) {
    this.config = config;
}

Platform.prototype.init = function () {
    this.addMissingNodeFunctions();
    this.addPlatformSpecificExtras();

    require('../fs-extras');

    phantom.injectJs('./src/platform/phantomjs/process.js');

    // setup simple globals
    window.PIWIK_INCLUDE_PATH = path.join(phantom.libraryPath, '..', '..', '..');

    window.expect = function () {
        return chai.expect.apply(chai.expect, arguments);
    };

    window.options = require('../parse-cli-args').parse(require('system').args);

    var testsLibDir = path.join(phantom.libraryPath, "..", "..", "lib");

    // load mocha
    var mochaPath = path.join(testsLibDir, this.config.mocha, "mocha.js");
    phantom.injectJs(mochaPath);

    // setup mocha (add stdout.write function)
    mocha.constructor.process.stdout = {
        write: function (data) {
            fs.write("/dev/stdout", data, "w");
        }
    };

    // load chai
    var chaiPath = path.join(testsLibDir, this.config.chai, "chai.js");
    phantom.injectJs(chaiPath);

    // load & configure resemble (for comparison)
    var resemblePath = path.join(testsLibDir, 'resemblejs', 'resemble.js');
    phantom.injectJs(resemblePath);
};

Platform.prototype.setupGlobals = function (testEnvironment) {
    window.testEnvironment = testEnvironment;
};

Platform.prototype.addMissingNodeFunctions = function () {
    fs.readdirSync = function (path) {
        return fs.list(path);
    };

    fs.unlinkSync = function (path) {
        return fs.remove(path);
    };

    fs.existsSync = function (path) {
        return fs.exists(path);
    };

    fs.writeFileSync = function (path, data) {
        fs.write(path, data, "w");
    };

    fs.appendFileSync = function (path, data) {
        fs.write(path, data, "a");
    };

    fs.readFileSync = function (path) {
        return fs.read(path);
    };

    // phantomjs does not have Function.prototype.bind
    Function.prototype.bind = function () {
        var f = this,
            boundArguments = [],
            thisArg = arguments[0];

        for (var i = 1; i < arguments.length; ++i) {
            boundArguments.push(arguments[i]);
        }

        return function () {
            var args = [].concat(boundArguments);
            Array.prototype.push.apply(args, arguments);

            return f.apply(thisArg, args);
        };
    };

    // phantomjs console.log/console.error must support sprintf params for mocha
    var sprintfWrappedFunc = function (original) {
        return function () {
            var arrayArgs = [];
            for (var i = 0; i < arguments.length; ++i) {
                arrayArgs.push(arguments[i]);
            }

            if (arrayArgs.length > 0) {
                if (typeof arrayArgs[0] === 'undefined') {
                    arrayArgs[0] = 'undefined';
                } else {
                    arrayArgs[0] = arrayArgs[0].toString();
                }
            }

            var message = arrayArgs[0];
            try {
                message = sprintf.apply(null, arrayArgs);
            } catch (e) {
                // ignore
            }

            original.call(console, message);
        };
    };

    console.log = sprintfWrappedFunc(console.log);
    console.error = sprintfWrappedFunc(console.error);
};

Platform.prototype.addPlatformSpecificExtras = function () {
    fs.isDir = function (path) {
        return fs.isDirectory(path);
    };

    // isFile & isLink already exists, don't overwrite
};

Platform.prototype.changeWorkingDirectory = function (toDirectory) {
    fs.changeWorkingDirectory(toDirectory);
};

Platform.prototype.runApp = function (app) {
    app.run();
};

exports.Platform = Platform;

exports.getLibraryRootDir = function () {
    return phantom.libraryPath;
};