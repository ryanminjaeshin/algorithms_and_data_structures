/**
 * @param {string[]} logs
 * @return {string[]}
 */
 var reorderLogFiles = function(logs) {
    let body = s => s.slice(s.indexOf(' ') + 1) // get body
    let isNum = c =>  /\d/.test(c);
    
    const compare = (a, b) => {
        let n = body(a).localeCompare(body(b));
        if (n !== 0) return n;
        return a.localeCompare(b);
    }
    
    let letterLogs = [];
    let digitLogs = [];
    
    for (let log of logs) {
        if(isNum(body(log))) {
            digitLogs.push(log)
        } else {
            letterLogs.push(log);
        }
    }
    
    return [...letterLogs.sort(compare), ...digitLogs]
    
};

// recap