var greeter = (function () {
  var name = "Bob";

  function sayHello() {
    console.log("Hello ", name);
  };

  function sayHi() {
    console.log("Hi ", name)
  };

  return {
    sayHello: sayHello,
    sayHi: sayHi
  }
})();

greeter.sayHello();
greeter.sayHi();

/**
 *
 * The Module Pattern must satisfy the following:
    Private members live in the closure.
    Public members are exposed in the return object.
*/