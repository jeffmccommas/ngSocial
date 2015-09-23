'use strict';

angular.module('ngSocial.version', [
  'ngSocial.version.interpolate-filter',
  'ngSocial.version.version-directive'
])

.value('version', '0.1');
