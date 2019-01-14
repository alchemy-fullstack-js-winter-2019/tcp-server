
describe('ChatRoom', () => {

  const c1 = {};
  const c2 = {};
  const c3 = {};

  let clients = null;

  beforeEach(() => {
    clients = new Clients();
    chatroom.add(c1);
    chatroom.add(c2);
    chatroom.add(c3);
  });

  it('assigns random user name', () => {
    expect(c1.username).toEqual('username1');
    expect(c2.username).toEqual('username2');
    expect(c3.username).toEqual('username3');
  });
});
