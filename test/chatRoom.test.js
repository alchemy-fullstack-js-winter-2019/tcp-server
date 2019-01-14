const chatRoom = require ('../lib/chatRoom');

describe('Chat room', () => {
  it('can add a client', () => { //add this method to our list of clients
    //const client
    const client = {};
    chatRoom.add(client);

  });
  expect(client.username).toEqual(username);
});