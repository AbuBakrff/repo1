const http = require('http');

const hostname = '127.0.0.1';
const port = 3003;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hozirgi kunda 7.8 mlrd aholi yashab kelmoqda');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});