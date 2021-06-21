var reverse = function(x) {
    const isNegative = x < 0;
     x = Math.abs(x);
    let reversed = 0;
    let pop;
    while (x != 0) {
        pop = x % 10;
        x = Math.floor(x/10)
        
        reversed = (reversed * 10) + pop
    }
    if (reversed > Math.pow(2,31)) return 0;
    return isNegative ? -1 * reversed : reversed
};
// recap