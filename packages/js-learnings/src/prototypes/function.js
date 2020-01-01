/** 
 * 
 * Function has some common methods on its prototype (call,apply,bind etc).
 * these functions are reachable to any js function, through prototype chaining.
 * its same like event bubble if Foo.call doesnt exist go up the function prototype chain to search it 
*/


function Foo(who) {
  this.me = who;
  console.log(this);
}
console.log(Foo.prototype);
console.log(Foo.__proto__);
console.log(Foo.prototype === Foo.__proto__); // they are not same
console.log(Foo.__proto__ === Function.prototype);
console.log(Foo.__proto__ === Function.__proto__);
console.log(Foo.call({ test: 1}, 'who'));
console.log(Foo.apply({ test: 1}, ['who']));
const boundedFun = Foo.bind({ test: 1}, ['who']);
console.log(boundedFun());

//function.__proto__ = Function.__proto__ =  Function.prototype = () => { call, apply ,bind }