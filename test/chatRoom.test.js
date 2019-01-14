const ChatRoom = require('../lib/chatRoom');

describe('Chatroom', () => {
  let chatRoom = null;
  beforeEach(() => {
    chatRoom = new ChatRoom();
  });
  it('can add a client', () => {
    const client = {};
    // call the chatroom.add(client)
    chatRoom.add(client);
    // expect client.username is defined
    expect(client.username).toBeDefined;
  });
});
