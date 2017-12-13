function sortByHeight(a) {
    let tempArr = [];

    a.map((val) => {
        if(val !== -1) tempArr.push(val);
    });

    tempArr.sort((a, b) => a - b);

    a.map((val, i) => {
        if(val === -1) tempArr.splice(i, 0, val);
    });


    return tempArr;
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);