/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let res = 0;
    
    for (let i = 0; i < boxTypes.length; i ++) {
        if (boxTypes[i][0] > truckSize) {
            res += boxTypes[i][1] * truckSize;
            break;
        } else {
            res += boxTypes[i][0] * boxTypes[i][1];
            truckSize -= boxTypes[i][0]
        }
    }
    return res;
};