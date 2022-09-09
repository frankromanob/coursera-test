(function() {
  'use strict';

  angular.module('public')
  .controller('SignUpController',SignUpController);

  SignUpController.$inject = ['MenuService'];
  function SignUpController(MenuService) {
    var signUpCtrl = this;
    signUpCtrl.result = "";
    signUpCtrl.submit = function() {
      MenuService.getDish(signUpCtrl.myInfo.favoriteDish.toUpperCase()).then(function(response) {
        if (response === false) {
          signUpCtrl.result = "No such menu number exist";
        }
        else {
          signUpCtrl.myInfo.favoriteDish = signUpCtrl.myInfo.favoriteDish.toUpperCase();
          signUpCtrl.myInfo.title = response.name;
          signUpCtrl.myInfo.description = response.description;
          signUpCtrl.result = "Your information has been saved";
          MenuService.setMyInfo(signUpCtrl.myInfo);
        }
      });

    }
  }

})();
