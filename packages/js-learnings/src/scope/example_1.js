
var foo = "bar";

function bar() {
  var foo = "baz";
}

function baz(foo) {
  foo = "bam";
  bam = "yay";
}

/*

// Kyle simpson (JS)

Js code is compiled and then executed.
Compilation happens in two phases
1st phase: compiler identifies tokens(variable declarations, function declarations) from programm 
and registers them in their respective scope)
2nd phase: code gets executed 

var foo = “bar”

at line 1:
Engine asks: hey, scope do you have a lhs reference for foo, scope says u registered reference to foo in first pass, here it is.
Engine gets lhs reference from scope, rhs is value , engine assignes value to lhs reference.
*/

baz(4);
/*
2nd phase line 10:
Engine asks: hey, scope do you have a lhs reference for "bam".
scope: i dont have a reference for "bam", go check at scope above.
(scope above is global scope in this case)
scope: hey, scope do you have a lhs reference for "bam".
scope above(global scope): i dont have "bam" reference and we r in "non strict" mode, so i register "bam", here you go its reference.  
Engine gets lhs reference from scope, rhs is value , engine assignes value to lhs reference.
This is what we call as scope lickage. (var bam is in local scope of baz, its reference is registered in global scope)

in strict mode
scope above(global scope): i dont have "bam" reference and we r in "strict" mode, so sorry man!!
engine gets
ReferenceError: bam is not defined
*/

/*
undefined vs ReferenceError: bam is not defined
undefined = variable is registerd on some scope and it is not assigned a value yet
ReferenceError: bam is not defined = variable is not registered on any scope
*/