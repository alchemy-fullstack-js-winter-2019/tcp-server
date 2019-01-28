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
  it('updates name of user', () => {
    let c1 = cr;
    let client = cr.add(c1);
    let ogName = client.getClient(c1.username);
    expect(cr.rename(c1.username, 5)).toBeTruthy();
    expect(cr.getClient(ogName)).toBeFalsy();
    expect(cr.getClient(c1.username)).toEqual(cr.getClient(c1.username, 5));
  });
});

