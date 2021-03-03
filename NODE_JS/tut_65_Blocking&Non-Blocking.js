//Syncronos = blocking
// line by line execution


//Asyncronos = Non blocking
//line by line execution is not guaranteed 
//call backs will fire

//example of call backs in Asyncronos
const fs = require('fs');
fs.readFile('SayingHello.txt', "utf-8",(var_err, var_data)=>{
    console.log(var_data);
    console.log('The message inside this functions is printed after the reading of the file is completed.');
});
//The first arguement of the function inside readFile is var_error which is an error and the second is data variable.
console.log('This is a message in Asyncronos/ Non-Bloxking.');