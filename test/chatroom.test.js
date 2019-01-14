const ChatRoom  = require('../lib/chatroom');

describe('ChatRoom', () => {
  let chatroom = null;

  beforeEach(() => {
    chatroom = new ChatRoom();
  });

  it('can add a client', () => {
    const client = {};
    chatroom.add(client);
    expect(client.username).toBeDefined();
  });

  
});
