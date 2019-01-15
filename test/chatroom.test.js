const ChatRoom = require('../lib/chatroom');

describe ('ChatRoom', () => { 
  beforeEach(() => {
    chatroom = new ChatRoom();
  });

  it('adds a client ', () => {
    const client = {}; 
    chatroom.add(client);
    
    expect(client.username).toBeDefined();
  });

  it('returns the client with said username', () => {
    const client = {};  
    const addClient = chatroom.add(client);
    const foundClient = chatroom.getClient(client.username);
   
    expect(foundClient).toEqual(client);
  });
  
  it('renames the old username to new new username', () => {
    const client = {};  
    const addClient = chatroom.add(client);
    //get oldName from client  
    const renameUser = chatroom.rename(client.username, 'bob');
    //delete old key:value pair - use delete method

    
    expect(renameUser).toEqual('bob');

    //add a new pair or new client
    //set clients username to newUsername
    //someClientUserName = newUsername
    //expect that the call to .rename returns true
    //expect that using the old username does not return the client
    //expect that using the new username does return the client
    //expect that the client.username is now equal to the new username 
  });
  
  it('returns all clients', () => {

  });
  
});
