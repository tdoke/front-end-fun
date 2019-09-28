function foo() {
  var bar = "bar";

  function baz() {
    console.log(bar);
  }

  bam(baz);
}

function bam(baz) {
  baz();
}

foo();

/**
baz remembers its lexical scope even though baz is execution outside of its lexical scope (in scope of bam)
 * 
 */