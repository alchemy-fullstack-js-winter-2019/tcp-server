const ChatRoom = require ('../lib/chatRoom');

describe('Chat room', () => {
  let chatRoom = null;
  beforeEach(() => {
    chatRoom = new ChatRoom();
  });
  it('can add a client', () => { //add this method to our list of clients
    //const client
    const client = {};
    chatRoom.add(client);
    expect(client.username).toBeDefined();
  });
 
});
