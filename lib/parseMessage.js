const parsedMessage = (message) => {
    if(message[0] !== '@') return null;

    const realMessage = message.slice(1).split(':');
    const cmd = realMessage[0];

    console.log('command', cmd);
    console.log(realMessage);

    const secRealMessage = realMessage[1].split(' ');
    const arg = secRealMessage[0];

    console.log('arg', arg);
    console.log(secRealMessage);

    const thirdRealMessage = secRealMessage.splice(1);
    
    console.log(thirdRealMessage);


    const textMessage = thirdRealMessage.join(' ');
    console.log('The actual message', textMessage);
    


    return {
        cmd: cmd, 
        arg: arg, 
        text: textMessage
    };
};

console.log(parsedMessage('@cmd:param some text'));

module.exports = parsedMessage;


