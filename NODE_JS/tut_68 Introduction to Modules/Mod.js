console.log('This is Module');

function average(array){
    let sum = 0;
    array.forEach((element) => {
        sum = sum + element;
    });
    return sum/array.length;
}

// To make the average function usable by other js files we have to first export the average function.
// Lets export the average function

// module.exports = average;

// node js can export as an object also. In this case the sytex of the importer is also changes a little.

module.exports = {
    avg : average,
    Name : 'Roshan',
    Repo : 'GitHub'

}