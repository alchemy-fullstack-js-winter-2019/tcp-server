const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom', () => {

  let clients = null;
  const client1 = {};
  // const client2 = {};

  beforeEach(() => {
    clients = new ChatRoom();
    clients.add(client1);
  });

  it('takes a socket, assigns a random user name, and stores by user name', () => {
    console.log(client1);
    expect(client1.username).toEqual('user1');
  });

  it('takes a username and returns that object', () => {
    const response = clients.get(client1.username);
    expect(response).toEqual(client1);
  });

});
