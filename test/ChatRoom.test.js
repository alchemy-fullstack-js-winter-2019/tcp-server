const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom', () => {

  let clients = null;
  const client1 = {};
  const client2 = {};

  beforeEach(() => {
    clients = new ChatRoom();
    clients.add(client1);
    clients.add(client2);
  });

  it('takes a socket, assigns a random user name, and stores by user name', () => {
    const client3 = {};
    clients.add(client3);
    expect(client3.username).toEqual('user3');
    
  });

  it('takes a username and returns that object', () => {
    const response = clients.getClient(client1.username);
    expect(response).toEqual(client1);
  });

  it('renames a username to a new name', () => {
    const originalName = client1.username;
    clients.rename(client1.username, 'Aragorn');
    expect(client1.username).toEqual('Aragorn');
    expect(clients.getClient(originalName)).toBeFalsy();
  });

  it('can not rename to existing user name', () => {
    const response = clients.rename(client2.username, 'user1');
    expect(response).toBeFalsy();
  });

  it('can get all clients', () => {
    const all = clients.all();
    const expected = [
      { username: 'user1' },
      { username: 'user2' }];
    expect(all).toEqual(expected);
  });
});
