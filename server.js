/* eslint-disable no-console */
const app = require('./lib/app');

app.listen(6001, () => {
  console.log(`
    Server started on port 6001...

      _/_/_/  _/  _/    _/_/  _/_/_/
    _/    _/  _/  _/   _/ _/    _/
    _/        _/_/_/  _/  _/    _/
    _/        _/  _/  _/_/_/    _/
    _/    _/  _/  _/ _/   _/    _/
     _/_/_/   _/  _/_/    _/    _/
  `);
});
