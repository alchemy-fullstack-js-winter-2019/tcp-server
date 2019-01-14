


class Chatroom {
    constructor() {
        this.chatroom =  new Map();
    
    }

    add(obj) {
        obj.username = this.chatroom.size + 1;
        this.chatroom.set(obj);

        return obj;


    }
    getClient(username) {

        console.log(username);


        console.log(this.chatroom);


        return this.chatroom.get(username);
    }

}


module.exports = Chatroom;
