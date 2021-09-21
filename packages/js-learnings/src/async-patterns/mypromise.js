function MyPromise(executor) {
  executor(this.resolve, this.reject);
  this.then = function(resolve, reject) {
    this.resolve = resolve;
    this.reject = reject;
  };
}