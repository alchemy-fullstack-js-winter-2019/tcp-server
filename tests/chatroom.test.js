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
  });
  
  
  it('renames my user', () => {
    const client = {};
    chatroom.add((client));
    const originalName = client.username;
    expect(chatroom.rename(client.username, 'abel')).toBeTruthy();
    expect(client.username).toEqual('abel');
    expect (chatroom.getClient(originalName)).toBeFalsy();

  });

  // it('can not rename to existing user name', (username) => {

  // });
});
