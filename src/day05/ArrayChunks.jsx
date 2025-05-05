function chunkArray(arr, n) {
    // Your implementation
    // array method - slice (first, second);
    //The slice() method selects from a given start, up to a (not inclusive) given end.

    const chunks = [];

    for (let i = 0; i < arr.length; i += n){
        //catch: we are updating i adding with the size (i+= n)
        chunks.push(arr.slice(i, i + n));
    }
    return chunks;

}

console.log(chunkArray([3,5,7,12,14,67],2));
