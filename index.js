// receivesAFunction Function
function receivesAFunction(callback) {
    callback();
  }
  
  // returnsANamedFunction Function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function");
    };
  }
  
  // returnsAnAnonymousFunction Function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function");
    };
  }
