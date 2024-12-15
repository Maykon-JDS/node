// This imports the entire node:http module and assigns it to the variable http.
// const http = require('node:http'); (CJS)

import http from 'node:http'; // (MJS)
import { createServer } from 'node:http'; // (MJS)

// This uses destructuring assignment to extract only the createServer method from the node:http module.
// const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; //we set the statusCode property to 200, to indicate a successful response.
  res.setHeader('Content-Type', 'text/plain'); //We set the Content-Type header
  res.end('Hello World\n'); //we close the response, adding the content as an argument to end():
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});