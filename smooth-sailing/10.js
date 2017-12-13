function commonCharacterCount(s1, s2) {
    let holderArr = [];
    let arrS1 = s1.split('');
    let arrS2 = s2.split('');

    const equalCount = (el) => arrS1.filter(val => val === el).length === holderArr.filter(val => val === el).length;

    arrS2.map(val => {
        if(arrS1.indexOf(val) !== -1 && !equalCount(val)) holderArr.push(val);
    });

    return holderArr.length;
}

commonCharacterCount("aabcc", "adcaa");