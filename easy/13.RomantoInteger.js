var romanToInt = function(s) {
    let num = 0
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let len = s.length
    num = roman[s[len - 1]];
    for (let i = len - 2; i >= 0; i--) {
        if (roman[s[i]] < roman[s[i + 1]]) {
            num -= roman[s[i]];
        } else {
            num += roman[s[i]];
        }
    }

    return num;
};
console.log(romanToInt("III"));