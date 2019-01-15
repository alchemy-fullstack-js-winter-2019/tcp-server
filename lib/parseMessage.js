module.exports = message => {
    if(message[0] !== '@') return null;

    const realMessage = message.slice(1).split(':');
    console.log(realMessage);

    const pattern = /@(?<command>\w*):?(?<arg>\w)\s?(?<text>.*)?/;

    return {
        cmd: pattern.group.command,
        arg: pattern.group.arg
        txt:pattern
    };
}

console.log(message('@cmd:param some text'))