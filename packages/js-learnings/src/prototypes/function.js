/** 
 * 
 * Function has some common methods on its prototype (call,apply,bind etc).
 * these functions are reachable to any js function, through prototype chaining.
 * its same like event bubble if Foo.call doesnt exist go up the function prototype chain to search it 
*/


function Foo(who) {
  this.me = who;
  console.log('in constructor', this);
}
console.log('Foo.prototype', Foo.prototype);
console.log('Foo.__proto__', Foo.__proto__);
console.log('Foo.prototype === Foo.__proto__', Foo.prototype === Foo.__proto__); // they are not same
console.log('Foo.__proto__ === Function.prototype', Foo.__proto__ === Function.prototype);
console.log('Foo.__proto__ === Function.__proto__', Foo.__proto__ === Function.__proto__);
console.log('Function.prototype === Function.__proto__', Function.prototype === Function.__proto__);
console.log('--------------------------------');
console.log('Foo.call({ test: 1}, who)---', Foo.call({ test: 1}, 'who'));
console.log('--------------------------------');
console.log('Foo.apply({ test: 1}, [who])', Foo.apply({ test: 1}, ['who']));
console.log('--------------------------------');
console.log('new Foo(who)', new Foo('who'))
console.log('--------------------------------');
const boundedFun = Foo.bind({ test: 1}, ['who']);
console.log(boundedFun());

//function.__proto__ = Function.__proto__ =  Function.prototype = () => { call, apply ,bind }