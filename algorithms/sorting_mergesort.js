var mergeSort = function(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2)
      let left = arr.slice(0, mid);
      let right = arr.slice(mid)
  
      const merge = (leftArr, rightArr) => {
          let result = [];
          let lLen = leftArr.length;
          let rLen = rightArr.length;
          let l = 0;
          let r = 0;
  
          while(l < lLen && r < rLen) {
  
              if (leftArr[l] < rightArr[r]) {
                  result.push(leftArr[l ++])
              } else {
                  result.push(rightArr[r ++])
              }
          }
  
  
          return [...result, ...leftArr.slice(l), ...rightArr.slice(r)]
      }
  
      return merge(mergeSort(left), mergeSort(right))
  };