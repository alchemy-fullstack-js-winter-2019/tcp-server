const net = require('net');
const ChatRoom = require('./ChatRoom');
const parsedMessage = require('./parseMessage');


// pass createServer the callback 'connection' which gets fired everytime someone connects to the server
const server = net.createServer((connection) => {
    // console logs tha a user has connected
    console.log('user connected');

    // creates a new class ChatRoom using imported function
    const chatRoom = new ChatRoom;

    // sets encoding 
    connection.setEncoding('utf8');

    // uses the class 'add' method to add a new user the chatroom
    chatRoom.add(connection);

    // listens for the 'end' event AKA a user disconnecting from the server
    connection.on('end', () => console.log('user has disconnected'));

    connection.on('data', data => {
        console.log(data);
        const message = parsedMessage(data);
        console.log(message);
        chatRoom.add(connection);
        if(message.cmd === 'all') {
            chatRoom.all.filter(ele => ele !== connection).forEach(connection => {
                connection.write(`${connection.username}: ${message.text}`);
            });
        } else if(message.cmd === 'dm') {
            const user = chatRoom.getClient(message.arg);
            connection.write(`${user.username}: ${message.text}`);
        } else if(message.cmd === 'nick') {
            chatRoom.rename(connection.username, message.arg);
            connection.write(`You have renamed your user to: ${connection.username}`);
        }

    });
    // 'pipes' or directs any network notifications to the terminal 
    // aka anything that happens on the server prints in the server
    connection.pipe(process.stdout);
});


module.exports = server;

