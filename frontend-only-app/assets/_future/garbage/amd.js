// package/lib is a dependency we require
define(["package/lib"], function (lib) {

  // behavior for our module
  function foo() {
    lib.log( "hello world!" );
  }

  // export (expose) foo to other modules as foobar
  return {
    foobar: foo
  }
});



// Somewhere else the module can be used with:
require(["package/myModule"], function(myModule) {
  myModule.foobar();
});