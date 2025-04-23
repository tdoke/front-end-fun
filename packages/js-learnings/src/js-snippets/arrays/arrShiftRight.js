// shiftRight([1,2,3,4,5], 2) , [5,4,1,2,3]
function arrShiftRight(arr, positions) {
    const removedArr = [];
    for (let index = 0; index < positions; index++) {
        removedArr.push(arr.pop());
    }
    return [...removedArr, ...arr];
}

console.log("[1,2,3,4,5] ==>", arrShiftRight([1,2,3,4,5], 2));