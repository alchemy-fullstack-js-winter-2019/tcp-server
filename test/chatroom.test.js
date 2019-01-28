const Chatroom = require('../lib/chatroom');

describe('Chatroom', () => {
  let chatroom = null;
  beforeEach(() => {
    chatroom = new Chatroom();
  });

  it('can add a client', () => {
    const client = {};
    chatroom.add(client);
    expect(client.username).toBeDefined();
  });

  it('returns the client with said username', () => {
    const client = {};
    chatroom.add(client);
    const chosen = chatroom.getClient(client.username);
    expect(chosen.username).toEqual(client.username);
  });

  it('renames a user', () => {
    const client = {};
    chatroom.add(client);
    chatroom.rename(client.username, 'banana');
    expect(chatroom.rename(client.username, 'banana')).toBeTruthy();
    expect(chatroom.getClient('banana')).toBeDefined();
    expect(client.username).toEqual('banana');
  });

  it('returns all clients', () => {
    const client = {};
    const client1 = {};
    chatroom.add(client);
    chatroom.add(client1);
    const allClients = chatroom.all();
    expect(allClients).toEqual([client, client1]);
  });

});

