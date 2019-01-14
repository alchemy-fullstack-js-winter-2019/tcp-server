const shortid = require('shortid');

class ChatRoom {
  constructor(){
    this.clients = new Map();
  }
  add(client){
    const username = shortid.generate();
    client.username = username;
    
    this.clients.set(client.username, username);
    console.log(client.username);

  }
  getClient(client){

  }
  rename(username){

  }
  
}

module.exports = ChatRoom;
