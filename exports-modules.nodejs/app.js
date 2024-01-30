// MODULE: main

// ------Exporting functions-------
console.log('App is starting...')

const {add,sub,mul,div} = require("./functions");
let a = add(2,3)
console.log(a)
console.log(sub(2,3))
console.log(mul(2,3))
console.log(div(2,3))

console.log('App finished')
// --------------------------------

// ---------Exporting class-------
// console.log('App is starting...')

// const File = require('./File')
// let f = new File ('hit','mp3')
// f.info()

// console.log('App finished')
// --------------------------------


// ---------Exporting array-------
// console.log('App is starting...')

// let config = require("./config.js")
// console.log('Supported formats')
// config.forEach(
//     option => console.log(option)
// )

// console.log('App finished')
// --------------------------------


// ---------Exporting json data in array format-------
// console.log('App is starting...')

// let config = require("./config.json")
// console.log('Supported formats')
// config.forEach(
//     option => console.log(option)
// )

// console.log('App finished')
// --------------------------------