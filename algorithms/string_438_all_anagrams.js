var findAnagrams = function(s2, s1) {
    let map = {},
          start = 0,
          matched = 0,
          res = [];
  
      for (let i = 0; i < s1.length; i ++) {
          let char = s1[i];
          if(!(char in map)) map[char] = 0;
          map[char] ++;
      }
  
      for (let end = 0; end < s2.length; end ++) {
  
          let right = s2[end];
  
          if (right in map) {
              map[right] --;
              if (map[right] === 0) matched ++;
          }
  
          if (matched === Object.keys(map).length) res.push(start);
  
          if (end >= s1.length - 1) {
              let left = s2[start];
              start ++;
              if(left in map) {
                  if (map[left] === 0) matched --;
                  map[left] ++;
              }
          }
      }
      return res;
  };