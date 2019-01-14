


class Chatroom {
    constructor() {
        this.chatroom =  new Map();
    
    }

    add(obj) {
        obj.username = this.chatroom.size + 1;
        this.chatroom.set(obj.username, obj);

        return obj;


    }
    getClient(username) {
        console.log('the client object to be found by value', username);
        console.log(this.chatroom);
        console.log('the client found by id in the chatroom', this.chatroom.get(username));

        return this.chatroom.get(username);
    }

}


module.exports = Chatroom;
