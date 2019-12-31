function getCharacters() {
  const employees = [
    { id: 1, name: "John Snow" },
    { id: 2, name: "Danereyes Targeryan" },
    { id: 3, name: "Tyrion Lannister" }
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(employees), 1000);
  });
}

function fetchCharacters() {
  console.log("fetching characters");
  getCharacters()
    .then(characters => console.log("printing characters", characters));
  console.log("line after getCharacters");
}

fetchCharacters();

/** 
 * In this case getCharacters() returns a future value in present i.e promise.
 * promiseObject.then(rasolveFn), sets resolve,reject functions on promiseObject, when async action gets completed in future, these functions get called.
 * promise is reverse of inversion of control done in callback.
 * 1] we get promise object back from async lib.
 * 2] we tell promise object what to do when async opertion completes.
 * 3] when async operation completes, lib puts data on promise object, this leads to call of resolve function registered by client.
 *   client --> Promise <--- lib
 * 4] in this case resolve functions is not executed inside lib, it is executed inside Promise object, which guarentees its safety.
 * 
*/