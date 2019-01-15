
class ChatRoom {
  constructor() {
    this.chatroom = new Map();
  }
  add(obj) {
    obj.username = this.chatroom.size + 1;
    this.chatroom.set(obj.username, obj);
    return obj;
  }
  getClient(username) {
    return this.chatroom.get(username);
  }
  rename(oldName, newName) {
    const clientKey = this.chatroom.get(oldName);
    this.chatroom.delete(clientKey);
    clientKey.username = newName;
    this.chatroom.set(clientKey.username, clientKey);
    const client = this.chatroom.get(clientKey.username);
    return this.chatroom.get(client.username);
  }
}

module.exports = ChatRoom;
