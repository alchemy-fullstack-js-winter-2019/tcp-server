module.exports = message => {
  // take a string and pull out the important parts

  const re = /@(?<command>\w*):?(?<arg>\w*)\s?(?<text>.*)?/;
  const result = re.exec(message);

  console.log(result);

};
