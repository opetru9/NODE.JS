// MODULE: main

console.log('App is starting...')

const {add,sub,mul,div} = require("./functions");
let a = require('./temperature.json')
const typeControl = require("./types") 

let filteredArray = typeControl(a)

function calculateTotal(array) {
    if (array.length === 0) {
        return 0;  
    } else {
        return add(array[0], calculateTotal(array.slice(1)));
    }
}
    
let totalSum = calculateTotal(filteredArray);

let average = totalSum / (filteredArray.length);
console.log('Temperature average is : ' + average + " °C");

let error = ((a.length - filteredArray.length) / a.length) * 100;
console.log('With error: '+ Math.round(error) +' %');

console.log('App finished');
// --------------------------------

