function getCharacters(asyncCallback) {
  const employees = [
    { id: 1, name: "John Snow" },
    { id: 2, name: "Danereyes Targeryan" },
    { id: 3, name: "Tyrion Lannister" }
  ];

  return setTimeout(() => asyncCallback(employees), 1000);
}

function fetchCharacters() {
  console.log("fetching characters");
  getCharacters(function(characters) {
    console.log("printing characters", characters);
  });
  console.log("line after getCharacters");
}

fetchCharacters();

/**
 * what is callback
 * one way to express async flow in synchronous fashion.
 * continuation of program after some time, i.e function printing characters is executed after some time.
 * 
 * problems:
 * 1] callback hell, but its indentation problem, it can be resolved by writing seperate functions for callback codes.
 * 2] real problem: trust issue
 *    we wrap some part of program into a function and give it to async function to execute it in some later time.
 *    there is no trust issue in this as long as this async function belongs to browser javascript apis like setTimeout(fn, 1000)
 *    but if we have some external js library expecting a callback (eg like getCharacters(callbackFn)), we need to blindly trust that
 *    library to execute callback(some part of our code) in some later time. That library might execute callback more than once :(.
 *    so we are giving part of our code to this external library, and we have no control over when this code will be executed or how many times it will get
 *    executed. THATS THE real issue with callbacks. One way of solving this is Promises.
 *    callback is inversion of control i.e giving up control of your program flow to outside function i.e lib.
 */
