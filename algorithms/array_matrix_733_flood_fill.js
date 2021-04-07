var floodFill = function(image, sr, sc, newColor) {
    let startingPixel = image[sr][sc]
    const dfs = (image, sr, sc, newColor) => {
        if (sr < 0 || sc < 0 ||  sr >= image.length || sc >= image[0].length || image[sr][sc] !== startingPixel || image[sr][sc] === newColor) return;
        image[sr][sc] = newColor

        dfs(image, sr - 1, sc, newColor);
        dfs(image, sr + 1, sc, newColor);
        dfs(image, sr, sc - 1, newColor);
        dfs(image, sr, sc + 1, newColor);
    }
    dfs(image, sr, sc, newColor);
    return image
};
