// We will create a server and do task just like tut_67, linking multiple html or multiple task on different address

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));   //For serving static file
app.use(express.urlencoded());

// PUG STUF 
app.set('view engine', 'pug');  //Set th ehtemplate engine as pug
app.set('views', path.join(__dirname, 'views'));  //Set the biews directory

//ENDPOINTS
app.get('/', (req, res) => {
    const content_to_send = 'Start your goal and join the milions other like minded.';
    const send_object = {'title': 'My-Fitness' , 'content': content_to_send};
    res.status(200).render('index.pug', send_object);
});
app.post('/', (req, res) => {
    // create an output.txt and write all data provided by the user of our website
    let OutputToWrite = `The name of the client is ${req.body.name}, age is ${req.body.age}, gender is ${req.body.gender} and the address is ${req.body.address}. Thank you.`;
    fs.writeFileSync('Output.txt' , OutputToWrite);
    const obj = {'message' : 'Your form is submitted successfully.'};
    res.status(200).render('index.pug', obj);
});

//START THE SERVER
app.listen(port , () => {
    console.log(`The application is started successfully on port ${port}.`);
});

