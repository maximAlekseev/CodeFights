function palindromeRearranging(inputString) {
    let arr = [];
    let strArr = inputString.split('');
    let numOfOdd = 0;

    const checkOcc = (letter, arr) => {
        let count = 0;
        arr.map(val => {
            if(val === letter) count++;
        });
        return count;
    };

    for(let i=0; i<inputString.length; i++) {
        if(arr.indexOf(inputString[i]) === -1) arr.push(inputString[i]);
    }

    arr.map(val => {
        if(checkOcc(val, strArr) % 2 !== 0) numOfOdd++;
    })

    return numOfOdd <= 1;
}

palindromeRearranging("aabcc");