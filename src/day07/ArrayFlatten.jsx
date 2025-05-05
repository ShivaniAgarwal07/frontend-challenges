function flattenArray(arr) {
    // Your implementation
    // const flatArr = arr.flat(Infinity);
    // return flatArr

    const result = [];
    for (let i =0; i<arr.length; i++){
        let elem= arr[i];

        if(Array.isArray(elem)){
            result.push(...flattenArray(elem))
        }else{
            result.push(elem)
        }
    }

    return result



}

console.log(flattenArray([['a', 'a'], ['e','o','p'], ['e','l',['u']]]));