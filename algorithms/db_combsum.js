var combinationSum = function(candidates, target) {
  let result = [];

  const helper = (rem, current,start) => {
      if(rem < 0) return;
      if(rem === 0) {
          // valid path
          result.push(current.slice());
          return;
      }

      for(let i = start; i < candidates.length;i++){
          current.push(candidates[i]);
          helper(rem - candidates[i], current, i);
          current.pop();
      }
  }

  helper(target, [], 0);

  return result;
};