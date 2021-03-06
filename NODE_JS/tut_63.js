// console.log('Hello Wolrd̀');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  //Inluding tut_22.html to this backend server.
  res.end(`<!DOCTYPE html>      
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo Selector & more Designing</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: rgb(226, 245, 226);
              padding: 33px;
              margin: 34px auto;
              width: 666px;
          }
          a{
              text-decoration: none;  /* This line remove the underline from the link   which is provided by defult. */
              color: black;
          }
          a:hover{
              background-color: rgb(166, 166, 228);
          }
          a:visited{
              background-color: rgb(233, 233, 176);
  
              /* This linne is come when the link is already visited by the user. */
          }
          a:active{
              background-color: rgb(255, 255, 255);
          }
          .btn{
              color: black;
              background-color:rgb(241, 204, 204);
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 15px;
              border-radius: 20px;
          }
          .btn:hover{
              background-color: rgb(166, 166, 228);
          }
          .btn:active{
              background-color: rgb(255, 255, 255);
          }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores beatae exercitationem id incidunt laborum sunt quos, explicabo impedit quisquam placeat aperiam nesciunt totam blanditiis, veritatis ab quas consequuntur temporibus aliquam ipsum nulla cum non. </p>
          <a href=" " class="btn">Read More</a>
          <button class="btn">Contact Us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});