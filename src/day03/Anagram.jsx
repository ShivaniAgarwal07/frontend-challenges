function isAnagram(str1, str2) {
    // Your implementation
    
    
    const string1sort = str1.replace(/[^a-z]/gi, '').toLowerCase().split('').sort().join('');
    // (/[^a-z]/gi, '') this is for non-letters charaters 
    const string2sort = str2.replace(/[^a-z]/gi, '').toLowerCase().split('').sort().join('');
    // (/[^a-z]/gi, '') this is for non-letters charaters 


    return string1sort==string2sort
    
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("A gentleman", "Elegant man"));
console.log(isAnagram("hello", "world"));
console.log(isAnagram("dormitory!!!", "dirty room"));