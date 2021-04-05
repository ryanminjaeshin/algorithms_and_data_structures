var subdomainVisits = function(cpdomains) {
    let map = {};
    let res = [];
    for (let i = 0; i < cpdomains.length; i ++) {
        // count => 900
        let count = Number(cpdomains[i].split(' ')[0]);
        // domain => google.mail.com
        let domain = cpdomains[i].split(' ')[1].split('.');
        for (let j = 0; j < domain.length; j ++) {
            // [google, mail, com]
            let subDomain = domain.slice(j, domain.length).join('.');
            if (!(subDomain in map)) map[subDomain] = 0;
            map[subDomain] += count;
            
        }
    }
    for (let prop in map) {
      res.push(map[prop] + ' ' + prop)
    }
    return res;
};