const ChatRoom = require('../lib/chatroom')

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
      chatroom.getClient(username);
      expect(client).toEqual(client.username);
      done();
  })



   });
   
  
  




