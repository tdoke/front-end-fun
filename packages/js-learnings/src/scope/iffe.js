/*
 iffe
 1] it is used to hide your data/functions from global scope.
 2] its a function expression that gets immediately executed.
 3] One of its most common use case is to limit the scope of a variable made via var. 
 Variables created via var have a scope limited to a function so this construct 
 (which is a function wrapper around certain code) will make sure that your variable scope doesn't 
 leak out of that function.
*/

(function (a, b) {
  var c = 10;
  console.log(a + b + c)
})(5, 5);

var window = { mockWindow: true };
(function (globalObj) {
  //Access the globalObj
  console.log(globalObj);
})(window);