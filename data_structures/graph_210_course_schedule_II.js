var findOrder = function(numC, preqs) {
    let inDegree = new Array(numC).fill(0);
    let queue = [];
    let res = [];

    for (let [course] of preqs) {
      inDegree[course] += 1;
    }

    for (let course = 0; course < inDegree.length; course ++) {
      if(inDegree[course] === 0) queue.push(course);
    }

    while (queue.length) {
      let currentCourse = queue.pop();
      numC --;
      res.push(currentCourse);
      for (let [course, preq] of preqs) {
        if (preq === currentCourse) {
          inDegree[course] --;
          if (inDegree[course] === 0) queue.push(course)
        }
      }
    }

    return numC === 0 ? res : [];
};