const clients = new Map();

function getRandomName() {
  const adjs = ['autumn', 'hidden', 'bitter', 'misty', 'silent'];
  const nouns = ['waterfall', 'river', 'breeze', 'moon', 'rain'];
  return (
    adjs[Math.floor(Math.random() * adjs.length)] +
    '_' +
    nouns[Math.floor(Math.random() * nouns.length)]
  );
}

class ChatRoom {
  constructor() {

  }

  add(client) {
    client.username = getRandomName();
    clients.set({ username: client.username });
    return client;
  }

  getClient(username) {
    return username;
  }

  rename(username, newUsername) {
    if(username) {
      username = newUsername;
      clients.set(newUsername);
      return true;
    }
  }

  all() {
    return [...clients.values()];
  }

}

module.exports = ChatRoom;
