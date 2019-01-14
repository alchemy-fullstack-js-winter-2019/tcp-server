const Chatroom = require('../lib/chatroom');

describe('Chatroom', () => {
  let chatroom = null;
  beforeEach(() => {
    chatroom = new Chatroom();
  });
  it('can add a client', () => {
    //call the chatroom.add method on a client
    const client = {};
    chatroom.add(client);
    expect(client.username).toBeDefined();
  });
});
