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

  it('takes a socket, assigns a random user name, and stores by user name', (done) => {
    const client3 = {};
    clients.add(client3);
    expect(client3.username).toEqual('user3');
    expect(client3).toBeDefined();
    done();
  });

  it('takes a username and returns that object', (done) => {
    const response = clients.getClient(client1.username);
    expect(response).toEqual(client1);
    done();
  });

  it('renames a username to a new name', (done) => {
    clients.rename(client1, 'Aragorn');
    expect(client1.username).toEqual('Aragorn');
    // expect(clients.getClient('user')).toBeFalsy();
    done();
  });

  it('can not rename to existing user name', (done) => {
    const response = clients.rename(client2, 'user1');
    console.log('response', response);
    expect(response).toBeFalsy();
    done();
  });


  it('can get all clients', (done) => {
    const all = clients.all();
    const expected = [
      { username: 'user1' },
      { username: 'user2' }];
    expect(all).toEqual(expected);
    done();
  });

});
