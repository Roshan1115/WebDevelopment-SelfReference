// We will create a server and do task just like tut_67, linking multiple html or multiple task on different address

const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// Static file serving
app.use('/static', express.static('static'));

// Set the template engine as pug
app.set('view engine', 'pug');

// Set the view directory
app.set('views', path.join(__dirname, 'views'));

// Our pug demo endpoint
app.get('/demo_pug',(req,res) =>{
    res.status(200).render('demo', { title: 'Hey Roshan', message: 'Hello there! and thanks for telling me how to use pug.' })
});


// This app,get will replace the if else statement here just we used in tut_67
app.get('/',(req,res) =>{
    res.send("This is my frst Express app. Thank you for sending GET request.");
});
app.get('/about',(req,res) =>{
    res.send("This is my frst ABOUT Express app. Thank you for sending GET request");
});
app.get('/this', (req,res) => {
    res.status(404).send('This page is not found. FUCK OFF !');
});

// using app.post
app.post('/OtherName', (req,res) =>{
    res.send('This is my first OtherName Express app. Thank you for sending POST request.');
});

app.listen(port , () => {
    console.log(`The application is started successfully on port ${port}.`);
});

