const shortId = require('short-id');

class ChatRoom {
  constructor() {
    this.clients = [];
  }

  add(client) {
    client.username = client.username || `user${shortId.generate()}`;
    this.clients.push(client);
    return client;
  }

  getClient(username) {
    return this.clients.find(client => client.username === username);
  }

  rename(username, newUsername) {
    if(username !== newUsername && this.getClient(newUsername) === undefined) {
      this.getClient(username).username = newUsername;
      return this.getClient(newUsername);
    } else {
      return false;
    }
  }

  all() {
    return this.clients;
  }

  parseMessage(message) {
    if(message[0] === '@') {
      const data = {};
      let messArr = message.split('@')[1].split(':');
      data.command = messArr[0];
      messArr = messArr[1].split(' ');
      data.arg = messArr[0];
      messArr.splice(0, 1);
      data.text = messArr.join(' ');

      return data;
    }
    return null;
  }
}

module.exports = ChatRoom;
