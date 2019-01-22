const Chatroom = require('../lib/chatroom');

describe(' test various chatroom methods', () => {
    let chatroom = null;
    beforeEach(() => {
        chatroom = new Chatroom();
    });
    it('can add a new client(user) to the chatroom', () => {
        const client = {};
        const clientUsername = chatroom.add(client);

        expect(client.username).toEqual(clientUsername.username);
        expect(client.username).toBeDefined();
    });
    it('can get a client by value', () => {
        const c1 = chatroom.add({});
        const returnedClient = chatroom.getClient(c1.username);

        expect(returnedClient).toEqual(c1);
    });
    it('can rename an username', () => {
        const c1 = chatroom.add({});
        const OGname = 1;
        chatroom.rename(c1.username, 99);

        expect(chatroom.rename(c1.username, 99)).toBeTruthy();
        expect(chatroom.getClient(OGname)).toBeFalsy();
        expect(c1.username).toEqual(99);
    });
    it('can return all the values in the class', () => {
        const c1 = chatroom.add({});
        const c2 = chatroom.add({});
        const allClients = chatroom.all();

        expect(allClients).toEqual([c1, c2]);
    });


});




