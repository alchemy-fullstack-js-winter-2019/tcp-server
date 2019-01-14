const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom', () => {
  it('takes a socket, assigns random user name, and stores by user name', () => {
    const chatroom = new ChatRoom();
    const client = chatroom.add('Joe');
    expect(client.username).toEqual('Joe');
  });
});
