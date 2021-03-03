// Functions in javascript

console.log("hellow World.");
 let name = "Roshan";
 let name1 = "Raghav";
 let name2 = 'Shubham';
 let other_text = 'Good Morning.';

 console.log(name + ' is a good boy.');
 console.log(name1 + ' is a good boy.');
 console.log(name2 + ' is a good boy.');
 console.log('\n');

 //We can printt all the above repeated line using funcions.
 //First define the funcions
 function print_sentence(arguement,sec_arguement = 'Hey, whatsupp ?'){      //this is default arguement of sec_arguement.
     console.log(sec_arguement + arguement);
    console.log(arguement + ' is a good boy.');
 }
 //now lets usee functions to print all that same
 console.log('The below lines are printed by function');
print_sentence(name, other_text);
print_sentence(name1, other_text);
print_sentence(name2, other_text);
 

// lets code for returning funciton.

function sum(a,b,c){
    let d = a+b+c;
    return d;
}
let first=23,second=32,third=6;
let result = sum(first,second,third);
console.log(result);