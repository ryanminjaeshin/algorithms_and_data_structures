var canFinish = function(numCourses, prerequisites) {
  let inDegree = new Array(numCourses).fill(0);
  let queue = [];

  for (let [course] of prerequisites) {
      inDegree[course] ++;
  }

  for (let course = 0; course < inDegree.length; course ++) {
      if (inDegree[course] === 0) {
          queue.push(course);
      }
  }

  let count = 0;

  while (queue.length) {
      let currentCourse = queue.pop();
      count ++;
      for (let [course, preq] of prerequisites) {
          if (preq === currentCourse) {
              inDegree[course] --;
              if (inDegree[course] === 0) {
                  queue.push(course)
              }
          }
      }
  }

  return numCourses === count;
};