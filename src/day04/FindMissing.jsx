function findMissingNumber(nums) {
    // Your implementation
    const n = nums.length;
    const sumOfNatural = n * (n + 1) / 2;
    let sumOfNums = 0;
    nums.forEach(num => {sumOfNums += num});
    
    return sumOfNatural - sumOfNums;
}

console.log(findMissingNumber([2,5,8,9]));