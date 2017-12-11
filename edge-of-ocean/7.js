function almostIncreasingSequence(sequence) {

    // check if array is in ascending order
    const checkAsc = (arr) => {
        for(let i=0; i<arr.length - 1; i++) {
            if(arr[i] >= arr[i+1]) {
                return false;
            }
        }
        return true;
    };

    // check if input array is already in ascending order
    if(checkAsc(sequence)) return true;

    // main part
    for (let i = 0; i < sequence.length; i++) {
        let tmp = sequence[i];
        if(sequence[i] >= sequence[i+1] || sequence[i] <= sequence[i-1]) {
            sequence.splice(i, 1);
            if (checkAsc(sequence)) {
                return true;
            }
            else {
                sequence.splice(i, 0, tmp);
            }
        }
    }

    return false;
}

console.log(almostIncreasingSequence([1, 2, 3, 55, 5, 6]));
