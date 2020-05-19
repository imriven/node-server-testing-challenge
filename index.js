const server = require('./server.js');
var fs = require('fs')
var https = require('https')
const s = https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, server)
const PORT = process.env.PORT || 5000;

s.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});