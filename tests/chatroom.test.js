const ChatRoom = require('../lib/chatroom');

describe('ChatRoom', () => {
  let clients = null;
  var client1 = {};
  var client2 = {};
  var client3 = {};

  beforeEach(() => {
    clients = new ChatRoom();
    clients.add(client1);
    clients.add(client2);
    clients.add(client3);
  });
  
  it('can add a client and store it by user name', (done) => {
    const client4 = {};
    clients.add(client4);
    expect(client4.username).toEqual('user4');
    expect(client4).toBeDefined();
    done();
  });
  
  it('takes a username and returns that object', (done) => {
    const response = client1.username;
    expect(response).toEqual(client1);
    done();
  });
  
  it('renames the user', (done) => {
    const client = {};
    clients.add((client));
    const originalName = client.username;
    expect(clients.rename(client.username, 'Abel')).toBeTruthy();
    expect(client1.username).toEqual('Abel');
    expect (clients.getClient(originalName)).toBeFalsy();
    done();
    
  });

  it('can not rename to existing user name', (done) => {
    const response = clients.rename(client2.username, 'user1');
    expect(response).toBeFalsy();
    done();
  });

  it('can get all clients', (done) => {
    const all = clients.all();
    const expected = [
      { username: 'user1' },
      { username: 'user2' },
      { username: 'user3' }
    ];
    expect(all).toEqual(expected);
    done();
  });
});
