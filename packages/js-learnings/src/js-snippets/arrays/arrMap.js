function arrMap(arr = [], mapfn = undefined) {
    const output = [];
    arr.forEach(element => {
        output.push(mapfn(element));
    });
    return output;
}

console.log(">>", arrMap([1,2,3,4], (element) => element*2));