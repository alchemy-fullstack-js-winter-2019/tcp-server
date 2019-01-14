const ChatRoom = require('../lib/chatRoom');

describe('database', () => {
  const client1 = {};
  const client2 = {};
  const client3 = {};
  let clients = null;

  beforeEach(() => {
    clients = new ChatRoom();
    clients.add(client1);
    clients.add(client2);
    clients.add(client3);
  });
  it('gives a username to each client', () => {
    expect(client1.username).toEqual('user1');
    expect(client2.username).toEqual('user2');
    expect(client3.username).toEqual('user3');
  });
  it('grabs all the clients', () => {
    const allUsers = clients.getAll();
    expect(allUsers).toEqual([client1, client2, client3]);
  });
  it('grabs a single user', () => {
    const oneUser = clients.getUser(client1.username);
    expect(oneUser).toEqual(client1);
  });
});
