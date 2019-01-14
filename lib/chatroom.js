const shortid = require('shortid');

class ChatRoom {
  constructor() {
    this.clients = new Map();
    this.userCount = 0;
  }
  add(client){
        //create a unique username
        this.userCount++
        const username = shortid.generate;
        //adds the username to the client object
        client.username = username;
        //add that username to client
        this.clients.set(client.username, client);
    //add client to this.clients
    return client;
  }
  getClient(username){
        return this.clients.get(username); 
  };

 
  


}
module.exports = ChatRoom;