const parsedMessage = (message) => {
    if(message[0] !== '@') return null;

    const realMessage = message.slice(1).split(':');
    const cmd = realMessage[0];

    const secRealMessage = realMessage[1].split(' ');
    const arg = secRealMessage[0];

    const thirdRealMessage = secRealMessage.splice(1);
    const textMessage = thirdRealMessage.join(' ');
    


    return {
        cmd: cmd, 
        arg: arg, 
        text: textMessage
    };
};

module.exports = parsedMessage;


