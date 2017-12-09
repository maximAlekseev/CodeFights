function shapeArea(n) {
    let sum = 1;
    if(n>1) {
        for(let i=1; i<n; i++) {
            sum += 4*i;
            console.log(sum);
        }
    }
    return sum;
}