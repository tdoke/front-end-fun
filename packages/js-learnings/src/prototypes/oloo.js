/**
 *
 * The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
 * Object.create() is an easier and cleaner way to achieve prototypel inheritance.
 *
 */

var Foo = {
  init: function(who) {
    this.me = who;
  },
  identify: function() {
    return "I am " + this.me;
  }
};

var Bar = Object.create(Foo); // Foo is set as prototype of Bar.
Bar.speak = function() {
  console.log("Hello", this.identify());
};

var b1 = Object.create(Bar); // Bar is set as prototype of b1.
b1.init("b1");
b1.speak(); // Hello I am b1

/** 
 * write common stuff on common object i.e Foo,
 * any object wants to use common stuff create it using Object.create(Foo)
 * just say Bar.init("Bar"); Bar.speak(); to use commmon code.
 * 
*/
