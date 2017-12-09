function makeArrayConsecutive2(statues) {
    let arr = statues.sort((a, b) => a - b);
    let count = 0;
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i+1] - arr[i] > 1) {
            count += arr[i+1] - arr[i] -1;
        }
    }
    return count;
}

makeArrayConsecutive2([6, 2, 3, 8]);