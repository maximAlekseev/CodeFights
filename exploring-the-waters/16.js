function areSimilar(a, b) {
    const isSim = (a, b) => a.every((val, i) => val === b[i]);
    let holder = [];
    let copyB = [...b];

    if(a.reduce((a, b) => a + b) !== b.reduce((a, b) => a + b)) {
        return false;
    } else if(!isSim(a, b)){
        for(let i=0; i<a.length; i++) {
            if(a[i] !== b[i]) {
                holder.push(i);
            }
        }
        copyB.splice(holder[1], 1, b[holder[0]]);
        copyB.splice(holder[0], 1, b[holder[1]]);

        return isSim(a, copyB);
    } else return true;
}

areSimilar([1, 1, 4], [1, 2, 3]);