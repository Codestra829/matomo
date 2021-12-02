/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

import { INgModelController, ITimeoutService } from 'angular';
import { nextTick } from 'vue';
import createAngularJsAdapter from '../createAngularJsAdapter';
import SiteSelector from './SiteSelector.vue';
import Matomo from '../Matomo/Matomo';

export default createAngularJsAdapter<[ITimeoutService]>({
  component: SiteSelector,
  require: '?ngModel',
  scope: {
    showSelectedSite: {
      angularJsBind: '=',
    },
    showAllSitesItem: {
      angularJsBind: '=',
    },
    switchSiteOnSelect: {
      angularJsBind: '=',
    },
    onlySitesWithAdminAccess: {
      angularJsBind: '=',
    },
    name: {
      angularJsBind: '@',
    },
    allSitesText: {
      angularJsBind: '@',
    },
    allSitesLocation: {
      angularJsBind: '@',
    },
    placeholder: {
      angularJsBind: '@',
    },
    modelValue: {},
  },
  $inject: ['$timeout'],
  directiveName: 'piwikSiteselector',
  events: {
    'update:modelValue': (newValue, vm, scope, element, attrs, ngModel, $timeout) => {
      if ((newValue && !vm.modelValue)
        || (!newValue && vm.modelValue)
        || newValue.id !== vm.modelValue.id
      ) {
        $timeout(() => {
          scope.value = newValue;

          element.attr('siteid', newValue.id);
          element.trigger('change', newValue);

          if (ngModel) {
            ngModel.$setViewValue(newValue);
            ngModel.$render(); // not called automatically by the digest
          }
        });
      }
    },
    blur(event, vm, scope) {
      setTimeout(() => scope.$apply());
    },
  },
  postCreate(vm, scope, element, attrs, controller, $timeout: ITimeoutService) {
    const ngModel = controller as INgModelController;

    scope.$watch('value', (newVal) => {
      if (newVal !== vm.modelValue) {
        vm.modelValue = newVal;
      }
    });

    // setup ng-model mapping
    if (ngModel) {
      if (vm.modelValue) {
        ngModel.$setViewValue(vm.modelValue);
      }

      ngModel.$render = () => {
        nextTick(() => {
          if (angular.isString(ngModel.$viewValue)) {
            vm.modelValue = JSON.parse(ngModel.$viewValue);
          } else {
            vm.modelValue = ngModel.$viewValue;
          }
        });
      };
    }

    $timeout(() => {
      if (attrs.siteid && attrs.sitename) {
        vm.modelValue = { id: attrs.siteid, name: Matomo.helper.htmlDecode(attrs.sitename) };
        ngModel.$setViewValue({ ...vm.modelValue });
      }
    });
  },
});
