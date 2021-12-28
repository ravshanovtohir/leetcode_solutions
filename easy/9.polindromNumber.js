var isPalindrome = function(x) {
    if (x < 0) return false;
    let a = 0;
    var y = x;
    while (x > 0) {
        a = a * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return y === a;
}