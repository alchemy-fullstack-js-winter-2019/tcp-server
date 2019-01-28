
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
    if(this.chatroom.has(newName)) return false;

    const clientKey = this.chatroom.get(oldName);
    this.chatroom.delete(oldName);
    clientKey.username = newName;
    this.chatroom.set(clientKey.username, clientKey);
    return clientKey;
  }
  getAll() {
    return [... this.chatroom.values()];
  }
  getBroadcastList(client) {
    return this.getAll().filter(x => x !== client);
  }
}

module.exports = ChatRoom;
