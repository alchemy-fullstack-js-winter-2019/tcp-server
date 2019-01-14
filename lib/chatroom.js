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
  rename(username, newUsername){

    this.getClient(username);
    this.clients.delete(username);
    console.log(username);
  }
  
}

module.exports = ChatRoom;
