/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

import { createAngularJsAdapter } from 'CoreHome';
import UserPermissionsEdit from './UserPermissionsEdit.vue';

export default createAngularJsAdapter({
  component: UserPermissionsEdit,
  scope: {
    userLogin: {
      angularJsBind: '<',
    },
    limit: {
      angularJsBind: '<',
    },
    onUserHasAccessDetected: {
      angularJsBind: '&',
      vue: 'accessChanged',
    },
    onAccessChange: {
      angularJsBind: '&',
      vue: 'userHasAccessDetected',
    },
    accessLevels: {
      angularJsBind: '<',
    },
    filterAccessLevels: {
      angularJsBind: '<',
    },
  },
  directiveName: 'piwikUserPermissionsEdit',
  restrict: 'E',
});
