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
    const oneUser = clients.getClient(client1.username);
    expect(oneUser).toEqual(client1);
  }); 
  it('allows you to rename the user', () => {
    const renamedUser = clients.rename(client2.username, 'Kitten');
    expect(renamedUser).toEqual({ username: 'Kitten' });
  });
  it('will not all you to rename to an already existing username', () => {
    const client4 = {};
    clients.add(client4);
    const client5 = {}; 
    clients.add(client5);
    const takenUser = clients.rename(client4.username);
    expect(takenUser).toBeFalsy();

  });
});
