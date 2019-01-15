const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom', () => {

  const c1 = {};
  const c2 = {};
  const c3 = {};

  let clients = null;

  beforeEach(() => {
    clients = new ChatRoom();
    clients.add(c1);
    clients.add(c2);
    clients.add(c3);
  });

  it('assigns random user name', () => {
    expect(c1.username).toEqual('user1');
    expect(c2.username).toEqual('user2');
    expect(c3.username).toEqual('user3');
  });

  it('gets a single client by username', () => {
    const singleUser = clients.getClient(c2.username);
    expect(singleUser).toEqual(c2);
  });

  it('renames a user', () => {
    const client = {};
    clients.add(client);
    const oldName = client.username;
    expect(clients.rename(client.username, 'Bill')).toBeTruthy();
    expect(client.username).toEqual('Bill');
    expect(clients.getClient(oldName)).toBeFalsy();
  });
});
