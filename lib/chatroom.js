const shortid = require('shortid');

class ChatRoom {
  constructor(){
    this.clients = new Map();
  }
  add(client){
    const username = shortid.generate();
    client.username = username;
    this.clients.set(username, client);
  
  }
  getClient(username){
    return this.clients.get(username);
  }
  rename(oldName, newName){
    const client = this.clients.get(oldName);
    const deleted = this.clients.delete(oldName);

    client.username = newName;

    this.clients.set(newName, client);

    return deleted;

  }
}

module.exports = ChatRoom;
