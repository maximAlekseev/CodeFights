function arrayMaximalAdjacentDifference(inputArray) {
    let max = 0;

    for(let i=0; i<inputArray.length; i++) {
        if(inputArray[i] - inputArray[i+1] > max || inputArray[i+1] - inputArray[i] > max) {
            max = Math.abs(inputArray[i] - inputArray[i+1]);
        }
    }

    return max;
}

arrayMaximalAdjacentDifference([10, 11, 13]);