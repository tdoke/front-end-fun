/** 
 * add logger function on every object created.
 * 
 * 
*/

Object.prototype.logger = function () {
  console.log('logging content', JSON.stringify(this));
}

const test = {
  a: 10,
  b: 20
};

test.logger();