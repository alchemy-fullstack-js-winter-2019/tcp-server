


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
        // console.log('the client object to be found by value', username);
        // console.log(this.chatroom);

        // console.log('the client found by id in the chatroom', this.chatroom.get(username));

        return this.chatroom.get(username);
    }
    rename(oldName, newName) {

        const clientKey = this.chatroom.get(oldName);

        //deletes a key value pair 
        this.chatroom.delete(oldName);


        clientKey.username = newName;
        
        this.chatroom.set(clientKey.username, clientKey);

        const client = this.chatroom.get(clientKey.username);

        return this.chatroom.get(client.username);

    }
    all() {
        return [...this.chatroom.values()];
    }



}


module.exports = Chatroom;
