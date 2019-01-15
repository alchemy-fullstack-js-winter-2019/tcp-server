const shortid = require('shortid');


class ChatRoom {
  constructor() {
    this.clients = new Map();
    this.userCount = 0;

    this.clients = {
      user1: client,
      newName: client,
      user2: client,
      user3: client
    };
  }

  add(client) {
    
    const username = shortid.generate();
    client.username = username;
    this.clients.set(client.username, client);
    return client;
  }

  getClient(username) {
    return this.clients.get(username);
  }

  rename(oldName, newName) {
    const client = this.clients.get(oldName);
  
    const deleted = this.clients.delete(oldName);
    client.username = newName;

    this.clients.set(newName, client);

    return deleted;
  }

  all() {
    // returns all clients
    return this.clients.values();
  }

  parseMessage() {
    var str = " ";
    // test that it ignores strings that do not start with @
    var newStr = str.startsWith(!'@');

    // test that a string like @cmd:param some text returns and object
    return newStr;

  }
}
