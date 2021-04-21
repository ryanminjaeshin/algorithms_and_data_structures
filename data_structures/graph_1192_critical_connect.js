const buildAdjList = (n, connections) => {
    const r = Array(n).fill().map(() => []);
    
    for (let c of connections) {
        const [a, b] = c;
        r[a].push(b);
        r[b].push(a);
    }
    
    return r;
}

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    const adjList = buildAdjList(n, connections);
    const orderList = Array(n).fill();
    const lowlinkList = Array(n).fill();
    
    let order = 0;
    const cycles = [];
    const critical = []
    
    const strongConnect = (i, p) => {
        orderList[i] = order++;
        lowlinkList[i] = orderList[i];
        
        for (const j of adjList[i]) {
            if (j === p) {
                continue;
            }
            
            if (orderList[j] === undefined) {
                strongConnect(j, i);                
            }
            
            lowlinkList[i] = Math.min(lowlinkList[i], lowlinkList[j]);
            
			// A higher lowlink value for node `j` means that the oldest 
			// ancestor that could be reached from node `j` is still younger
			// than node `i`. Had there been any other path from `j` to `i`,
			// `j`'s lowlink value would have been lower. Hence this connection
			// is critical.
            if (lowlinkList[j] > orderList[i]) {
                critical.push([i, j])
            }
        }
        
    }
    
    for (const i in adjList) {
        if (orderList[+i] !== undefined) {
            continue;
        }
        
        strongConnect(+i);
    }
    
    return critical;
};