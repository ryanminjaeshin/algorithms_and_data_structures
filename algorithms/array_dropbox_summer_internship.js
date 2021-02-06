const findDatabase = (arr, k) => {
  let windowEnd = k;
  let newBucket = [];

  for (let windowStart = 0; windowStart < arr.length - k + 1; windowStart += 1) {
    let bucket = arr.slice(windowStart, windowEnd)
    newBucket.push(Math.min(...bucket));
    windowEnd += 1;
  }

  return Math.max(...newBucket);
}


// Recap