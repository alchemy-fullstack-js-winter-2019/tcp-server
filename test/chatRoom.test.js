const ChatRoom = require('../lib/chatRoom');

const client1 = {};

describe('ChatRoom', () => {
  let chatRoom = null;
  beforeEach(() => {
    chatRoom = new ChatRoom();
    chatRoom.add(client1);
  });

  it('adds a client in my chatroom', done => {
    chatRoom.add({ username: 'Aaron' }, (err, addedClient) => {
      expect(err).toBeFalsy();
      expect(addedClient.username).isDefined({ username: 'Aaron' });
    });
    done();
  });

  it('gets a client by username', done => {
    chatRoom.getClient({ username: 'Aaron' }, (err, foundClient) => {
      expect(err).toBeFalsy();
      expect(foundClient.username).toEqual({ username: 'Aaron' });
    });
    done();
  });

  it('renames a user', done => {
    chatRoom.rename({ username: 'Aaron' }, 'Aaron2'), (err, renamedClient) => {
      expect(err).toBeFalsy();
      expect(renamedClient.username, 'Aaron2').toEqual('Aaron2');
    };
    done();
  });

  it('returns a list of all clients in map', done => {
    chatRoom.all(), (err, allClients) => {
      expect(err).toBeFalsy();
      expect(allClients).toHaveLength(allClients.length);
    };
    done();
  });
});
