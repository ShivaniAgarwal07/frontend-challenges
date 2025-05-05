function flattenArray(arr) {
    // Your implementation
    const flatArr = arr.flat(Infinity);
    return flatArr
}

console.log(flattenArray([['a', 'a'], ['e','o','p'], ['e','l',['u']]]));