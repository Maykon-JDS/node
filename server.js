
// This imports the entire node:http module and assigns it to the variable http.
const http = require("node:http"); // (CJS)

// import http from 'node:http'; // (MJS)
// import { createServer } from 'node:http'; // (MJS)

// This uses destructuring assignment to extract only the createServer method from the node:http module.
const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  console.count("serve");

  res.statusCode = 200; //we set the statusCode property to 200, to indicate a successful response.
  res.setHeader("Content-Type", "text/plain"); //We set the Content-Type header


  let num1 = 255; // integer
  let num2 = 255.0; // floating-point number with no fractional part
  let num3 = 0xff; // hexadecimal notation
  let num4 = 0b11111111; // binary notation
  let num5 = 0.255e3; // exponential notation


  console.log(num1 === num2); // true
  console.log(num1 === num3); // true
  console.log(num1 === num5); // true
  console.log(num1 === num4); // true

  res.end("Hello World\n"); //we close the response, adding the content as an argument to end():
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
