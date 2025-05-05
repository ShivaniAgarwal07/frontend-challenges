function countVowels(str) {
    // Your implementation

    //first way
    
    // let cnt = 0;
    // const vowels = 'aeiou';
    // for (let i = 0; i < str.length; i++){
    //     let char = str[i].toLowerCase();
    //     if (vowels.includes(char)) {
    //         cnt += 1;
    //     }
    // }
    // return cnt;

    //second way 

    let count = 0;
    for (let i = 0; i < str.length; i++){
        let ch = str[i].toLowerCase();
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            count += 1;
        }
    }
    return count;


}

console.log(countVowels('shivaniagarwal'));