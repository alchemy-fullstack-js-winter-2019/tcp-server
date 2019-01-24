const Chatroom = require('../lib/chatroom.js');

describe('Chatroom', () => {
  let chatroom = null;
  beforeEach(() => {
    chatroom = new Chatroom();
  });

  it('can add a client', () => {
    const client = {};
    chatroom.add(client);
    expect(client.username).toBeDefined;
  });

  it('returns client with username', () => {
    const client = {};
    chatroom.add(client);
    const chosen = chatroom.getClient(client.username);
    expect(chosen.username).toEqual(client.username);
  });

  it('renames my user', ()  => {
    const client = {};
    chatroom.add(client);
    const oldName = client.username;
    expect(chatroom.rename(client.username, 'jei')).toBeTruthy();
    expect(client.username).toEqual('jei');
    expect(chatroom.getClient(oldName)).toBeFalsy();
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
