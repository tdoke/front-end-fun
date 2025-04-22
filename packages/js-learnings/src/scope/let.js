/*
1] before let javascript had var, and it was function scoped.
2] var variable gets attached to its enclosing functions scope.
3] let variable gets attached to its enclosing block scope. its es6 feature.
*/

function foo() {
  for (var i = 0; i < 10; i++) {
    console.log('do')
  }
  console.log(i); // 9
}

function fooWithLet() {
  for (let i = 0; i < 10; i++) {
    console.log('do')
  }
  console.log(i); // Uncaught ReferenceError: i is not defined
}

foo();
fooWithLet();