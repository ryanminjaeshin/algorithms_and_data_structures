/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.push(0, h);
    verticalCuts.push(0, w);
    horizontalCuts.sort((a,b) => a - b);
    verticalCuts.sort((a, b) => a - b);
    let maxH = 0;
    let maxV = 0;
    for (let i = 1; i < horizontalCuts.length; i ++) {
        maxH = Math.max(maxH, horizontalCuts[i] - horizontalCuts[i - 1])
    }
    for (let i = 1; i < verticalCuts.length; i ++) {
        maxV = Math.max(maxV, verticalCuts[i] - verticalCuts[i - 1])
    }
    return (maxH * maxV) % (10 ** 9 + 7)
};