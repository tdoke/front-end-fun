/** 
 * every function while executing has ref to current execcution cotext which has this object.(this object gets resolved by dynamic scoping, )
 * u can never mix dynamic and lexical scoping
 * this is always an object.
 * 
 * what is execution context: where and how the function is called.
 * call site: place in a program where a function is called.
 * 4 rules how this keyword gets bound
*/

/** 
 * 
 * in js everything has reference to object or function, no function of object has value of functions/objects inside it.
*/

function foo() {
  console.log(this.bar);
}

var bar = "bar1";
var o2 = { bar: "bar2", foo: foo }; // o2.foo references foo func i.e object property ref
var o3 = { bar: "bar3", foo: foo }; // o3.foo refereneces foo func i.e object property ref


console.log("***** understanding default binding ************************");

foo();    // in strict mode 'this' is undefined else 'this' is in global. // undefined // this default binding 

console.log("***** understanding implicit binding ************************");

o2.foo(); // when there is object prop reference, that object becomes 'this'  // bar2 // this implicit binding
o3.foo(); // when there is object prop reference, that object becomes 'this'  // bar3 

console.log("***** understanding explicit binding ************************");
// if you .call,.apply they take 'this' as object // this explicit binding
foo.call({ bar: "bar4" }, 1, 2, 3, 4);
foo.apply({ bar: "bar5" }, [1, 2, 3, 4]);
foo.bind({ bar: "bar6" }, [1, 2, 3, 4])(); 
/**
 *
 * The call() method calls a function with a given this value and arguments provided individually.
 * Note: While the syntax of this function is almost identical to that of apply(), the fundamental difference is that call() accepts an
 * argument list, while apply() accepts a single array of arguments.
 *
 * The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of
 * arguments preceding any provided when the new function is called.
 *
 */

// the new keyword
/** 
 * when you put new keyword next to function call like new foo() below 4 things happen
 * 1] brand new empty object poof created out of thin air
 * 2] this brand new object gets linked to diffrent object*
 * 3] brand new object gets bound to this keyword for that function call
 * 4] if function doesnt return anything, then it will implicitly return this object i.e brand new poof object
 * 
 * take any function put new ahead of its call, and you have hijacked that function to become a constructor.
*/
console.log("***** understanding new keyword ************************");
function foo(){
  this.baz = "baz";
  console.log("print bar,baz",this.bar +" "+baz);
}
var bar = "bar";
var baz = new foo();
console.log("print this from foo", baz);

// to find "this" binding, find the call site and ask 4 questions(questions.png)
// order of precedence for this (new > explicit binding > implicit binding > default binding)




