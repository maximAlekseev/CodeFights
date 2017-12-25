const avoidObstacles = (inputArray) => {
    let jumpLen = 0;
    let arr = [];
    inputArray.sort((a, b) => a - b);

    for(let i=inputArray[0]; i<inputArray[inputArray.length-1]; i++) {
        if(inputArray.indexOf(i) === -1) {
            arr.push(i);
        }
    }

    if(arr.length) {
        let count = jumpLen + 1;
        while (count < inputArray[inputArray.length - 1]) {
            if (inputArray.every(val => val % count !== 0)) {
                jumpLen = count;
                break;
            } else {
                count++;
            }
        }

        if(!jumpLen) {
            jumpLen = inputArray[inputArray.length - 1] + 1;
        }
    } else {
        jumpLen = inputArray[inputArray.length - 1] + 1;
    }

    return jumpLen;
};

avoidObstacles([1, 2, 4, 5, 6]);



