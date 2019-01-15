module.exports = message => {
  return {
    command: 'cmd',
    arg: 'param',
    text: 'some text'
  };
};

function message(str) {
  // if(!str.startsWith('@')) return null;
  return JSON.parse(str);
}
