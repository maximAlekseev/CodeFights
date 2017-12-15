function arrayChange(inputArray) {
    let count = 0;

    for(let i=0; i<inputArray.length; i++) {
        while(inputArray[i] >= inputArray[i+1]) {
            inputArray[i+1] += 1;
            count++;
        }
    }

    return count;
}

arrayChange([1, 1, 1]);