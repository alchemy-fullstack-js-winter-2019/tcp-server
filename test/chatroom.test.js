const ChatRoom = require('../lib/chatroom');

describe('chatRoom', () => {
  let cr = null;
  let c1 = {};

  beforeEach(() => {
    cr = new ChatRoom();
  });
  it('can add a client', () => {
    const newClient = cr.add(c1);
    expect(newClient).toBeDefined;
  });
  // it('gets client by Username', ()=> {
  //   const client = cr.add(c1);
  //   const clientId = client.getClient(username, client);
    
  // });
});

