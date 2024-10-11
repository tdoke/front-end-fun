// copy paste below code in browser console

// hoisting function declarations
foo();
function foo(){
    console.log("Hello, i am foo");
}
// console output: Hello, i am foo

// hoisting function expressions
foo();
const foo = () => console.log("i am foo");
// console output: Uncaught ReferenceError: foo is not defined
// function expressions are not hoisted.

// hoisting var declarations
console.log(x);
var x = 10;
/**
 * console output: undefined.
 * declaration of x is hoisted (i.e its not throwing error Uncaught ReferenceError: x is not defined)
 * , but assigment of x is not. This is because
 * assignment expressions are not hoisted.
 */

console.log(x);
/* 
console output: Uncaught ReferenceError: x is not defined
*/


console.log(x);
let x = 10;
// console output: Uncaught ReferenceError: x is not defined

console.log(x);
const x = 10;
// console output: Uncaught ReferenceError: x is not defined
