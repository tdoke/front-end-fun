/** 
 * js has prototypal inheritance which is completely different than class inheritance
 * Foo.prototype <--------- a1
 *    ^
 *    |
 *    |
 * Bar.prototype <--------- b1
 * 
 * if b1.someFunc() is not on object b1, then Bar.prototype is checked, if it not there we go one levle up in prototype
 * chaining to Foo.prototype. this kind of control delegation is bottom up and completely opposite to that of class based inheritance
 *  This is called behaviour delegation.
*/