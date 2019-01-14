
class ChatRoom {
  constructor() {
    this.classList = [];
  }
  add(obj) {
    obj.userName = 'USER' + this.classList.length;
    this.classList.push(obj);
  }
  getClient(userName) {
    return this.classList[userName];
  }
}

module.exports = ChatRoom;
