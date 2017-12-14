function reverseParentheses(s) {
    let patt = /\(|\)/g;

    while(patt.test(s)) {
        let firstPar = s.match(/\([\w|\s]+\)/)[0];
        s = s.replace(firstPar, firstPar.replace(patt, '').split('').reverse().join(''));
    }

    return s;
}
