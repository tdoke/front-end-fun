/** 
 * add logger function on every array created.
 * 
 * 
*/

Array.prototype.logger = function () {
  console.log('logging content', JSON.stringify(this));
}

const test = {
  a: 10,
  b: 20
};

// test.logger(); // logger is not a function

const arr = [1, 2, 3, 4, 5];
arr.logger();
const arr2 = [ { id: 1 }, { id: 2 }, { id: 3 } ];
arr2.logger();