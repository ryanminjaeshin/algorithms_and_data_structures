var slowestKey = function(releaseTimes, keysPressed) {
    let maxLength = 0, longestIndex = -1;
    
    for (let i in releaseTimes) {
      let timePressed = releaseTimes[i] - (releaseTimes[i-1] || 0);
      
      // if longer press found than current max, update maxLength and index of longest pressed key
      if (timePressed > maxLength) {
        maxLength = timePressed;
        longestIndex = i;
      } 
      // if current timePressed is same as max, update longestIndex if current is lexicographically larger
      else if (timePressed === maxLength) {
        longestIndex = keysPressed[i] > keysPressed[longestIndex] ? i : longestIndex;
      }
    }
    
    return keysPressed[longestIndex];
  };