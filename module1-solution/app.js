(function () {
'use strict';

angular.module('lunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchitems = "";

  $scope.checklunch = function () {
    var foodlist = $scope.lunchitems.split(',');
    console.log($scope.lunchitems);
    if ($scope.lunchitems==="") {
      $scope.lunch= "Please enter data first";
    }
    else if (foodlist.length>3) {
      $scope.lunch= "Too Much!";
    }
    else {
      $scope.lunch= "Enjoy";
    }
  };

}

})();
