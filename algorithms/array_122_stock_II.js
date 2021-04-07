var maxProfit = function(prices) {
    if (!prices) return 0;
    let sum = 0;
    for (let i = 1; i < prices.length; i ++) {
        if (prices[i-1] < prices[i]) {
            sum += prices[i] - prices[i - 1];
        }
    }
    return sum;
};