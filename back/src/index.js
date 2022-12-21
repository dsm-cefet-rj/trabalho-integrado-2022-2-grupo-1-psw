const http = require('http');

require('dotenv').config();

const db = require('./modules/database/api')();

main();

async function main () {

  await db;

  const server = require('./express.config');

  const app = http.createServer(server);

  app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server listening on http://${process.env.HOST}:${process.env.PORT}/`)
  });

}