const ChatRoom = require('../lib/chatroom');

describe('chatRoom', () => {
  let cr = null;
  let c1 = {};

  beforeEach(() => {
    cr = new ChatRoom();
  });
  it('can add a client', () => {
    let newClient = cr.add(c1);
    expect(newClient).toBeDefined;
  });
  it('gets client by Username', ()=> {
    let c1 = cr;
    let client = cr.add(c1);
    let user = client.getClient(c1.username);
    expect(user).toEqual(client); 
  });
});

