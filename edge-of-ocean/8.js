function matrixElementsSum(matrix) {
    let sum = 0;

    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[i].length; j++) {
            if(i>0 && (matrix[i-1][j] === 0 || matrix[i-1][j] === 'x')) {
                matrix[i].splice(j, 1, 'x');
            } else if(matrix[i][j] === 0) {
                matrix[i].splice(j, 1, 'x');
            } else {
                sum += matrix[i][j];
            }
        }
    }

    return sum;
}

matrixElementsSum([[0, 1, 1, 2],
                   [0, 5, 0, 0],
                   [2, 0, 3, 3]]);