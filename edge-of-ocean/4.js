function adjacentElementsProduct(inputArray) {
    let sum = inputArray[0]*inputArray[1];
    for(let i=1; i<inputArray.length; i++) {
        if(inputArray[i]*inputArray[i+1] > sum) {
            sum = inputArray[i]*inputArray[i+1];
        }
    }
    return sum;
}
