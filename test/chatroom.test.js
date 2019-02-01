const ChatRoom = require('../lib/chatroom');


describe ('ChatRoom', () => { 
  let chatroom;
  let clients;

  beforeEach(() => {
    chatroom = new ChatRoom();
  });

  beforeEach(() => {
    clients = { client: 1 };
    chatroom.add(clients);
  });

  it('adds a client', () => {
    expect(clients).toEqual({
      ...clients,
      username: expect.any(String)
    });
  });

  it('gets a client by username', () => {
    expect(chatroom.getClient(clients.username)).toBe(clients);
  });

  it('renames a client', () => {
    const originalUsername = clients.username;
    chatroom.rename(clients.username, 'renamedUser');
    expect(clients.username).toEqual('renamedUser');

    expect(chatroom.getClient('renamedUser')).toEqual(clients);
    expect(chatroom.getClient(originalUsername)).toBeUndefined();
  });

  it('cannot rename to an existing username', () => {
    const client1 = {};
    const client2 = {};
    chatroom.add(client1);
    chatroom.add(client2);

    chatroom.rename(client1.username, client2.username);

    expect(client1.username).not.toEqual(client2.username);
  });

  it('gets a list of all clients', () => {
    Array.from(Array(5)).forEach(() => chatroom.add({}));

    const all = chatroom.all();
    expect(all).toHaveLength(6);
    expect(all).toContain(clients);

  });
});
  


  

  

