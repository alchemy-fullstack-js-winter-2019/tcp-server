const shortid = require('shortid');

class ChatRoom {
  constructor() {
    this.clients = new Map();
  }
  add(client){
        //create a unique username
        const username = shortid.generate;
        client.username = username;
        //add that username to client
        this.clients.set(client.username, client);
    //add client to this.clients
  }
  getClient(username)
 
  


}
module.exports = ChatRoom;