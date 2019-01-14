const app = require('./lib/app.js');

const PORT = 7890;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

