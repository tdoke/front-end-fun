/** 
 * 
 * Object has some common static functions on it, like assign,create etc.
 * Object.prototype has some common functions on it(toString,valueOf etc), 
 * these functions are reachable to any js object, through prototype chaining 
*/

/*
  Object is a constructor function from which all javascript objects descend. 
  (any js function can become a constructor 
    function if u put new next to its call) then it does 4 things mentioned in this.js
 js runtime has one instance of Object.
*/
console.log("printing", new Object());
console.log("Object.prototype", Object.prototype);

/*
Prototype of every contructor function points to prototype of Object.
prototype of each instance created by constructor function points to constructor function prototype.
prototype of each instance => prototype of constructor function => prototype of Object.
just like event bubbling if instance cant find a prop on its object, it searches it in its parent functions propotype, if 
it is not there then it searches it on its parents prototype.
*/
function Foo(input) {
  this.me = input;
};
var a = new Foo("a1");
console.log("constructor functions prototype(Foo.prototype) points to Object.prototype", Foo.prototype.__proto__ === Object.prototype)
console.log('instances prototype points to constructor functions prototype', a.__proto__ === Foo.prototype);
console.log("(prototype chaining) instance proto > function constructor proto -> Object proto",a.__proto__.__proto__ === Object.prototype);

/*
Object literal is also created using Object function, thats why Object literals prototype points to Object functions 
prototype
*/

var a2 = { test: '123' };
console.log(a2.__proto__ === Object.prototype); // true