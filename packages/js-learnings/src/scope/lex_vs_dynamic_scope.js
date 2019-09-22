// lexical vs dynamic scope
/*

lexical: = means compile time scope, before the lexical phase all the decisions 
  of how scope will work are made (i.e at author time)
dynamic := all decisions how scoping will work are run time decisions  
*/
 
// dynamic scope // code to explain theory

/*
dymamic : does function foo has bar, no, then check in the scope of function which has called foo (baz)
lexical: does function foo has bar, no, bar is not defined 
*/

function foo(){
  console.log(bar);
}

function baz(){
  var bar = "bar";
  foo();
}

baz();