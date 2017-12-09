function centuryFromYear(year) {
    return year%100 ? Math.floor(year/100) + 1 : year/100;
}

centuryFromYear(1700);