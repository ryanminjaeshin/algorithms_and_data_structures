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

}