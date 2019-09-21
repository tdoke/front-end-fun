/*
1] most basic unit of scope in javascript is a function, so if you wrap some variables inside a function, 
  they get attached to that functions scope.
  variables are attached to their enclosing functions scope.
  if you try to use those variables outside function in which they are declared, you will get ref error. 
*/

function bar(){
  var test = "1";
}
console.log(test);  // ReferenceError: test is not defined