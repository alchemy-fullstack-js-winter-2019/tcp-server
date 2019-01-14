
class ChatRoom {
  constructor() {
    this.chatroom = new Map();
  }
  add(obj) {
    obj.userName = 'USER' + this.chatroom.size;
    this.chatroom.set(obj);
  }
  getClient(userName) {
    return this.chatroom[userName];
  }
}

module.exports = ChatRoom;
