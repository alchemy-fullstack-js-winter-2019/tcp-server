module.exports = str => {
  if(str[0] !== '@') return null;
  
  const match = pattern.exec(str);


  if(!match || !match.groups) return;
  return {
    command: match.groups.command,
    args: match.groups.arg,
    text: match.groups.text
  };
};
