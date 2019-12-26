/**
 * 1] every single object is built by calling a contructor function.
    2] constructor makes an object that is linked to constructors prototype.
*/


function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return "I am " + this.me;
};

var a1 = new Foo("a1");
var a2 = new Foo("a2");

a2.speak = function() {
  console.log("hello ", this.identify() + ".");
};

console.log(a1.constructor === Foo);
/** 
 * as a1.constructor is not exist on a1, a1 goes up the prototype chain 
 * using internal prop a1.[[prototype]] and checks .constructor in prototype object.
 * 
 * js external way of accessing object prototype a1.__proto__
 * you will never be able to access object prototype using [[prototype]], as [[prototype]] is reserved for engine.
*/
console.log(a1.constructor === a2.constructor);
console.log(a1.__proto__ === Foo.prototype);
/** 
 * to access prototype of a function Foo.prototype
 * to access prototype of object a2.__proto__
 * prototype is always an object.
 */
console.log(a2.__proto__ === Foo.prototype);
console.log(a1.__proto__ === a2.__proto__);

