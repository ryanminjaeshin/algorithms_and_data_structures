class PeekingIterator {
    
    constructor(iterator) {
        this.itr = iterator;
        this.peeked = null;
    }
    
    peek() {
        if(!this.peeked) this.peeked = this.itr.next();
        return this.peeked;
    }
    
    next() {
        if(!this.peeked) return this.itr.next()
        const temp = this.peeked;
        this.peeked = null;
        return temp;
    }
    
    hasNext() {
        if(!this.peeked) return this.itr.hasNext()
        return true;
    }
}

function PeekingIterator(it) {
    let a = [];
    while (it.hasNext()) {
        a.push(it.next());
    }
    return {
        peek,
        next,
        hasNext
    }

    function peek() {
        return a[0];
    }

    function next() {
        return a.shift();
    }

    function hasNext() {
        return a.length != 0;
    }
}