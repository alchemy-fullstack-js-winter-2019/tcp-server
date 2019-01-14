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
  it('returns the client with said username', () => {
    const client = {};
    chatroom.add(client);
    const username = client.username;
    const chosen = chatroom.getClient(username);
    expect(chosen.username).toEqual(client.username);
  });
});

