//const chatRoom = require('../lib/chatRoom');

describe('ChatRoom', () => {
  it('can add a client', () => {
    const client = chatRoom.add(client) = {};
    //call the chatroom.add(client)
    expect(client.username).toBeDefined;
  });

  // it('takes a socket, assigns random user name, and stores by user name', () => {
  //   const chatRoom = new chatRoom();
  //   const mockChat = chatRoom.add(client);
  //   expect(client.username).toEqual(chatRoom.username);
  //   expect()
  // })
});

// * creating a new ChatRoom
// * call `.add(client)` (note you can pass in a "mock", a plain empty object. Doesn't have to be a socket instance)
// * expect that a name was returned as the username property of the client object (e.g. `expect(client.username).toEqual(username);`)
// * expect that the name was assigned as a property to the client object
// * call `.getClient(username)` passing in the username returned from the `.add` call, and
// * expect that the returned object is the same as what you supplied to the `.add` call.

// function Client(username) {
//   this.username = username,
// }
// return Client;
