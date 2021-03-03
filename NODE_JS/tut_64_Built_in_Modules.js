const a = require("fs");
let rd_text = a.readFileSync("SayingHello.txt","utf-8");
console.log("The content of 'SayingHello.txt' is : ");
console.log(rd_text);

//Replacing the words of SayingHello.txt 
let sec_text = rd_text.replace('welcome','Roshan');
//This will change the word 'welcome' to 'Roshan' and asign the content to the sc_read variable.
console.log(sec_text + '\n');

// lets create another txt file and copy the content of sec_text
console.log('Creating a new file');
a.writeFileSync('AnotherHello.txt',sec_text);
console.log('The content of sec_text is :');
console.log(sec_text);

