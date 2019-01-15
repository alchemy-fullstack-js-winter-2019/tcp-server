const ChatRoom = require('../lib/chatroom');

describe('ChatRoom', () => {
  let clients = null;
  var client1 = {};
  var client2 = {};

  beforeEach(() => {
    clients = new ChatRoom();
    clients.add(client1);
    clients.add(client2);
    
  });
  
  it('can add a client and store it by user name', (done) => {
    const client3 = {};
    clients.add(client3);
    expect(client3.username).toEqual(client3.username);
    expect(client3).toBeDefined();
    done();
  });
  
  it('takes a username and returns that object', (done) => {
    const response = clients.getClient(client1.username);
    expect(response).toEqual(client1);
    done();
  });
  
  it('renames the user', (done) => {
    const client4 = {};
    clients.add((client4));
    const originalName = client4.username;
    expect(clients.rename(client4.username, 'user-4')).toBeTruthy();
    expect(originalName).toEqual('user-3');
    done();
    
  });

  it('cannot rename to existing user name', done => {
    const response = clients.rename(client2.username, 'user-1');
    expect(response).toBeFalsy();
    done();
  });

  it('can get all clients', (done) => {
    const all = clients.all();
    const expected = [
      { username: 'user-1' },
      { username: 'user-2' },
    ];
    expect(all).toEqual(expected);
    done();
  });
});
