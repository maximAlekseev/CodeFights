function boxBlur(image) {
    let len = image[0].length - 2;
    let height = image.length - 2;
    let resultArr = [...new Array(height).keys()].map(i => new Array(len));
    let tmpArr = [];

    const sumMatrix = (arr) => {
        let result = 0;
        arr.map(val => result += val.reduce((a, b) => a + b));
        return Math.floor(result/9);
    };

    for(let i=0; i<image.length-2; i++) {
        for(let j=0; j<image[0].length-2; j++) {
            tmpArr = [[image[i][j], image[i][j+1], image[i][j+2]],
                      [image[i+1][j], image[i+1][j+1], image[i+1][j+2]],
                      [image[i+2][j], image[i+2][j+1], image[i+2][j+2]]];

            resultArr[i].splice(j, 1, sumMatrix(tmpArr));
            tmpArr = [];
        }
    }

    return resultArr;
}

boxBlur([[7,4,0,1],
    [5,6,2,2],
    [6,10,7,8],
    [1,4,2,0]]);