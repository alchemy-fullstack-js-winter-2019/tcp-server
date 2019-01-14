class ChatRoom {

  constructor(username) {
    this.username = username;
  }

  generateUsername() {
    return Math.random().toString(36).substring(2);
  }

  add(client) {
    const newChat = new ChatRoom();
    const usernameGenerated = newChat.username = this.generateUsername();
    return client = { this.username = usernameGenerated }
  }
}

module.exports = ChatRoom;
