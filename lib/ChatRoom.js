
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
}

module.exports = ChatRoom;
