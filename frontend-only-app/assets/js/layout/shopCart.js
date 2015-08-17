var shopCart = (function(){

  var items = [];

  return {
    addItem: function (item) {
      console.log ('item added');
      items.push(item);
    },

    getItems: function () {
      return items;
    },

    removeItem: function (item) {
      console.log ('item removed');
    }
  }
})();