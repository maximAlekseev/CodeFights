function alternatingSums(a) {
    let arr = [0, 0];

    a.map((val, i) => {
        if(i%2) {
            arr.splice(1, 1, arr[1] += val)
        } else {
            arr.splice(0, 1, arr[0] += val)
        }
    });

    return arr;
}

alternatingSums([100, 50]);