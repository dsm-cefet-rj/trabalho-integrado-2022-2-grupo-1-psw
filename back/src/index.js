require('dotenv').config();
require('module-alias/register');

require('@models/../api')

const http = require('http');

const server = require('./express.config');

const app = http.createServer(server);

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Server listening on http://${process.env.HOST}:${process.env.PORT}/`)
});