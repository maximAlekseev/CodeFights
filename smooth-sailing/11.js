function isLucky(n) {
    let arr = n.toString().split('').map(val => Number(val));
    let leftSum = 0;
    let rightSum = 0;

    arr.map((val, i) => {
        if(i>=0 && i<arr.length/2) {
            leftSum += val;
        } else {
            rightSum += val;
        }
    });

    return leftSum === rightSum;
}

isLucky(1230);