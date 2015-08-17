// someModule.js
exports.doSomething = function() { return "foo"; };

//otherModule.js
var someModule = require('someModule');
exports.doSomethingElse = function() {
  return someModule.doSomething() + "bar";
};

