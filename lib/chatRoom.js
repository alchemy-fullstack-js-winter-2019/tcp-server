const shortId = require('shortId');
class ChatRoom {
  constructor() {
    this.clients = new Map(); // store usernames here    
  }

  add(client) {
    const username = shortId.generate();
    client.username = `'user ' + ${username}`;
    this.clients.set(username, client);
    return client;
  }

  getClient(username) {
    const client = this.clients.get(username); //client?? also 19
    return client;
  }

  rename(oldName, chosenName) {
    const client = this.clients.get(oldName);
    const deleted = this.clients.delete(oldName);
    this.clients.username = chosenName;
    this.clients.set(chosenName, client);
    return deleted;
  }

  all(clients) {
    clients = this.clients.values();
    return clients;
  }
}

module.exports = ChatRoom;
