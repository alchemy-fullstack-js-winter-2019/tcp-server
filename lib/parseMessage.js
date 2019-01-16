module.exports = message => {

  if(!message.startsWith('@')) return null;

  const properties = message.split(' ');
  const splitCmd = properties[0].split(':');
  const command = splitCmd[0].slice(1);

  properties.shift();

  const arg = splitCmd[1];
  const text = properties.join(' ');

  return { command, arg, text };
};
