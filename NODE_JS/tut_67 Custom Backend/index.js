const { fstat } = require('fs');
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('index.html');
const about = fs.readFileSync('about.html');
const services = fs.readFileSync('services.html');
const contact = fs.readFileSync('contact.html');

const server = http.createServer((req, res) => {
  url = req.url;
  console.log(url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(url == '/.link'){
    res.end(home);
  }
  else if (url == '/services.link'){
    res.end(services)
  }
  else if(url == '/about.link'){
    res.end(about);
  }
  else if (url == '/contact.link'){
    res.end(contact)
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});