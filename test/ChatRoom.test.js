const ChatRoom = require('../lib/ChatRoom');

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
  
  it('gets the client with said username', () => {
    const client = {};
    chatroom.add(client);
    const gotClient = chatroom.getClient(client.username);
    expect(gotClient).toEqual(client);
  });

  it('renames username to newusername', () => {
    const client = {};
    chatroom.add(client);
    const origName = client.username;
    expect(chatroom.rename(client.username, 'Carmen')).toBeTruthy();
    expect(client.username).toEqual('Carmen');
    expect(chatroom.getClient(origName)).toBeFalsy();
  });

  it('cannot rename to existing username', () => {
    const client = {};
    chatroom.add(client);
    expect(chatroom.rename(client.username, 'user0')).toBeFalsy();
  });

  it('gets all clients', () => {
    const chatroom = new ChatRoom();
    const c1 = chatroom.add({});
    const c2 = chatroom.add({});
    const allClients = chatroom.all();
    expect(allClients).toEqual([c1, c2]);

  });
});

