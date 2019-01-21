


class Chatroom {
    constructor() {
        this.chatroom =  new Map();
        this.userNumber = 1;
    }

    add(obj) {
        obj.username = `USER- ${this.userNumber++}`;
        this.chatroom.set(obj.username, obj);
        return obj;
    }
    getClient(username) {
        return this.chatroom.get(username);
    }
    rename(oldName, newName) {
        const clientKey = this.chatroom.get(oldName);
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
