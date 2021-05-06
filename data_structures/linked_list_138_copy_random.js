// amazon
var copyRandomList = function(head) {
    if (!head) return head;
    let map = new Map();
    let tmp = head;
    // deep copy to map
    while(tmp) {
        map.set(tmp, new Node(tmp.val, null, null));
        tmp = tmp.next;
    }
    tmp = head;
    while(tmp) {
        map.get(tmp).next = tmp.next !== null ? map.get(tmp.next) : null;
        map.get(tmp).random = tmp.random !== null ? map.get(tmp.random) : null;
        tmp = tmp.next;
    }
    return map.get(head);
};

// recap
// recap