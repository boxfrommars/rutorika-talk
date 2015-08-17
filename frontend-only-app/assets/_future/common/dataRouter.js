var dataRouter = (function(){

  return {
    getControllers: function () {
      return $('body').data('controller').replace(' ', '').split(',');
    }
  }
})();