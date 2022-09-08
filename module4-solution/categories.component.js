(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'categorieslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
