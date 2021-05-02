/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
    let ver1 = version1.split('.');
    let ver2 = version2.split('.');
    
    for (let i = 0; i < Math.max(ver1.length, ver2.length); i ++) {
        let num1 = parseInt(ver1[i]) || 0;
        let num2 = parseInt(ver2[i]) || 0;
        
        if (num1 == num2) continue;
        
        return num1 > num2 ? 1 : -1;
    }
    return 0;
};