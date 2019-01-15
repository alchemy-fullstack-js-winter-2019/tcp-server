const ChatRoom = require('../lib/chatroom');

describe('ChatRoom', () => {
  var client1 = {};
  var client2 = {};
  var client3 = {};
  let chatroom = null;

  beforeEach(() => {
    chatroom = new ChatRoom();
    chatroom.add(client1);
    chatroom.add(client2);
    chatroom.add(client3);
  });
  
  // it('can add a client', done => {
  //   // const client = {}
  //   chatroom.add({ username: 'abel' }, (err, createdClient) => {
  //     expect(err).toBeFalsy;
  //     //expect client.username is defined
  //     expect(createdClient).toEqual({ username: 'abel' });
  //     done();
  //   });
  // });
  
  
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
