function allLongestStrings(inputArray) {
    let maxLen = 0;

    inputArray.map((val, i) => {
        if(val.length > maxLen) maxLen = val.length;
    });

    return inputArray.filter((val) => val.length >= maxLen);
}

allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]);