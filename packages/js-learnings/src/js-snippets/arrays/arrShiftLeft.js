// shiftRight([1,2,3,4,5], 2) , [5,4,1,2,3]
function arrShiftLeft(arr, positions) {
    const removedArr = [];
    for (let index = 0; index < positions; index++) {
        removedArr.push(arr.shift());
    }
    return [...arr,...removedArr];
}

console.log("[1,2,3,4,5] ==>", arrShiftLeft([1,2,3,4,5], 2));