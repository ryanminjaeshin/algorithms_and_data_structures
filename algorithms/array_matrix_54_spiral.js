var spiralOrder = function(matrix) {
  let res = new Array();
  let rb = 0,
      re = matrix.length - 1,
      cb = 0,
      ce = matrix[0].length - 1;

  while (rb <= re && cb <= ce) {
      for (let i = cb; i <= ce; i ++) {
          res.push(matrix[rb][i]);
      }
      rb ++;
      for (let i = rb; i <= re; i ++) {
          res.push(matrix[i][ce]);
      }
      ce --;

      if (rb > re || cb > ce) break;

      for (let i = ce; i >= cb; i --) {
          res.push(matrix[re][i])
      }

      re --;

      for (let i = re; i >= rb; i --) {
          res.push(matrix[i][cb])
      }

      cb ++;
  }

  return res;
};

var spiralOrder = function(matrix) {
    let res = [];
    while (matrix.length) {
        const r = matrix.shift();
        res.push(...r);
        for (const m of matrix) {
            let val = m.pop();
            if (val) {
                res.push(val);
                m.reverse();
            }
        }
        matrix.reverse();

    }
    return res;
};