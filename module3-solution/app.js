(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);


ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var itemsToBuy = this;

  itemsToBuy.itemName = "";
  itemsToBuy.itemQuantity = "";

  itemsToBuy.items = ShoppingListService.getItems1();

  itemsToBuy.addItem = function () {
      ShoppingListService.addItem(itemsToBuy.itemName, itemsToBuy.itemQuantity);
  }

  itemsToBuy.buyItem = function (itemN,itemQ,itemIndex) {
      ShoppingListService.buyItem(itemN,itemQ);
      ShoppingListService.removeItem(itemIndex);
  }

}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var boughtList = this;
  boughtList.itemName = "";
  boughtList.itemQuantity = "";
  boughtList.items = ShoppingListService.getItems2();
}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items1 = [];
  var items2 = [];

  service.addItem = function (itemName, quantity) {
    var item1 = {
      name: itemName,
      quantity: quantity
    };
    items1.push(item1);
  };

  service.buyItem = function (itemName2, quantity2) {
    var item2 = {
      name: itemName2,
      quantity: quantity2
    };
    items2.push(item2);
  };

  service.removeItem = function (itemIndex) {
    items1.splice(itemIndex, 1);
  };

  service.getItems1 = function () {
      return items1;
  };

  service.getItems2 = function () {
      return items2;
  };

}

})();
