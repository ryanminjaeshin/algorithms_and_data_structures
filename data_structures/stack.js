class Stack {
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    // push
    push (element) {
        this.size ++;
        this.storage[this.size] = element;
    }

    // pop
    pop () {
        if (this.size === 0) {
            return null;
        }
        var removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size --;
        return removed;
    }

}

const stack = new Stack();

stack.push('cat')
stack.push('dog')
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack);

// Recap
// Recap