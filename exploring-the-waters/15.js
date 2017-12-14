function addBorder(picture) {
    picture.map((val, i) => picture[i] = `*${picture[i]}*`);
    picture.unshift('*'.repeat(picture[0].length));
    picture.push('*'.repeat(picture[0].length));

    return picture;
}

addBorder(["abc", "ded"]);
