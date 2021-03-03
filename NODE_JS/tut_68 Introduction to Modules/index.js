// const average = require("./Mod");
// console.log(average([3,5]));

console.log('This is index');

// changed syntext after Mod.js's functions is expported as an object 
const AnyVariableName = require('./Mod');
console.log(AnyVariableName.avg([10,12]));
console.log('we can inport the name from module export and the name is ' + AnyVariableName.Name);

