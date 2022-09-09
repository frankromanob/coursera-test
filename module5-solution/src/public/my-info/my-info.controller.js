(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myInfo','ApiPath'];
function MyInfoController(myInfo,ApiPath) {
  var myInfoCtrl = this;
  myInfoCtrl.myInfo = myInfo;
  myInfoCtrl.showInfo = false;
  myInfoCtrl.basePath = ApiPath;
  console.log(myInfo);
  if (myInfoCtrl.myInfo !== null && myInfoCtrl.myInfo !== undefined) {
    myInfoCtrl.showInfo = true;
  }
}

})();
