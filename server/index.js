const app = require('./server.js');
const port = process.env.port || 3000;

const server = app.listen(port, function() {
  console.log('Profile listening on port ' + port);
});