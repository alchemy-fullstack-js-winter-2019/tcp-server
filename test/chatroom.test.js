const ChatRoom = require('../lib/chatroom');


describe ('ChatRoom', () => { 
  let chatroom = null;

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
    chatroom.add(client);
    const foundClient = chatroom.getClient(client.username);
   
    expect(foundClient).toEqual(client);
  });
  
  it('renames the old username to new new username', () => {
    const client = {};  
    chatroom.add(client);
    //get oldName from client  
    const renameUser = chatroom.rename(client.username, 'bob');
    //delete old key:value pair - use delete method
    expect (chatroom.rename(client.username, 'bob')).toBeTruthy();
    expect(renameUser).toEqual(true);
    // expect(client.username).toEqual('bob');
    expect(chatroom.getClient(client)).toBeFalsy();
  });
  it ('gets it all', () => {
    const clients = ['user0', 'user1', 'user2'] ;  
    chatroom.all(clients);

    expect(chatroom.all(clients)).toEqual(['user0', 'user1', 'user2']);
    
  });
   
  

});
  
// it('returns all clients', () => {

  

