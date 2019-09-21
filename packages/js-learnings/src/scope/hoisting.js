/**
 * hoisitng is a conceptual model how javascript works.
 * in reality, js run time works in two passess.
 * 1st pass = all the variable, function declarations are registered agaist a respective scopes.
 * 2nd pass = actual statements get executed.
 */

/**
 * function expressions dont get hoisted  but function declarations do.
 */

/** 
 * functions are hoisted before variables
 * function declarations can be overwritten (check output of code below. its "foo")
*/

foo();
var foo = 2;
function foo() {
  console.log("baz");
};
function foo() {
  console.log("foo");
};