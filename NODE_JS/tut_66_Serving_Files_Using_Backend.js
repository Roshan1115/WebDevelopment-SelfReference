//Creating a server

// createServer takes the call back and createserver includes request and resoponse parameters.
//request object is used ot get the informations of current HTTPt request.
//response object is used to send a respons to the current HTTP requeest
// response code is 200 
// The above functions will response fileContent as return.


const server_variable = require('http');
const fs = require('fs');
const FileContent = fs.readFileSync('JavaScript/tut_61_MathObject.html');

const server = server_variable.createServer((req,res) =>{
    res.writeHead(200, {'content-type' : 'text/html'} );
    res.end(FileContent);
});

server.listen(8000, '192.168.0.103',() =>{
    console.log('Listening on port 8000.');
});

