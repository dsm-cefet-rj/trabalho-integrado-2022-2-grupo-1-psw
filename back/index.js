const http = require('http');
const express = require('express')();

express.get('/', (_req, res) => {
  res.send('works test');
})

const app = http.createServer(express);

app.listen(5000, '0.0.0.0', () => {
  console.log("Server listening on port http://127.0.0.1:5000");
});