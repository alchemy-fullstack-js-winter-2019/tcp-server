class ChatRoom {
  constructor() {
    this.clients = new Map();
    this.userCount = 1;
  }

  add(client) {
    const username = this.userCount++;
    client.username = `user${username}`;
    this.clients.set(client.username, client);
    return client;
  }

  getClient(username) {
    return this.clients.get(username);
  }

  // rename(oldName, newName) {
  //   //get oldname client
  //   //delete key vlue pair
  //   //set the clients username to newName
  //   //add a new pair for newName and client
  //   //return
  // }
}

module.exports = ChatRoom;
