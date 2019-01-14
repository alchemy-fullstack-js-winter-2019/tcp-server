const { ChatRoom } = require('../lib/ChatRoom');

describe('ChatRoom', () => {
  let chatroom = null;
  beforeEach(() => {
    chatroom = new ChatRoom();
  });

  it('can add a client', () => {
    //const client = {}
    const client = {};
    //call the chatroom.add(client)
    chatroom.add(client);
    // expect client.username is defined
    expect(client.username).toEqual(1);
  });

  it('can get an existing client', () => {
    const c1 = chatroom.add({});
    const returnedClient = chatroom.getClient(c1.username);
    expect(returnedClient).toEqual(c1);
    // expect(client.username).toEqual('user');
  });

  it('should fail if username doesn\'t exist', () => {

  });

});