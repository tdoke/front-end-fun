function foo() {
  var bar = "bar";

  return function baz() {
    console.log(bar);
  }

}

function bam() {
  foo()();
}

bam();

/**
baz remembers its lexical scope even though baz is executed outside of its lexical scope (in scope of bam).
 function baz has a reference to its lexical scope.
 * 
 */