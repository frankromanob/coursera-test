(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'itemslist.template.html',
  bindings: {
    dishes: '<'
  }
});

})();
