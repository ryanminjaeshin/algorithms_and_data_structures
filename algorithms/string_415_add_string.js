var addStrings = function(num1, num2) {
    let i = num1.length -1,
        j = num2.length -1,
        carry = 0,
        res = '';

    while(i >= 0 || j >= 0) {
        let sum = carry;

        if (i >= 0) {
            sum += num1.charAt(i--) - '0' // change to number;
        }
        if (j >= 0) {
            sum += num2.charAt(j--) - '0' // change to number
        }

        res += sum % 10;
        carry = Math.floor(sum / 10);
    }

    if (carry !== 0) {
        res += carry;
    }
    return res.split('').reverse().join('');
};