class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }

    print(callback){
        return callback ? callback(this.value): `${this.value}`;
    }
}

