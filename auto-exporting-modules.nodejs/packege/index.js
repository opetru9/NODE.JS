// auto export"

const fs = require ('fs')
const dir = fs.readdirSync(__dirname)

dir.filter(file => !file.endsWith('.json') && file !== 'index.js')
    .map(fileName => module.exports[fileName] = require('./' + fileName))


// let requiredFiles = {}
// dir.filter(file => !file.endsWith('.json') && file !== 'index.js')
//     .map(fileName => requiredFiles[fileName] = require('./' + fileName))
// module.exports = requiredFiles 
// console.log(requiredFiles)











// dir
//     .filter-no index.js no .json
//         .map - remove '.js'
//             .map - require()
//                 use ...spread operator to convert exports in Obj{}

// let filtredDir = dir.filter(file => {
//     return !file.endsWith('.json') && file !== 'index.js';
// })
// let fileWithoutJs = filtredDir.map(file => file.replace('.js', ''))
// let requiredFiles = {}
// let requireFiles  = fileWithoutJs.map( fileName =>{
    //         return requiredFiles[fileName] = require('./' + fileName + '.js')
    //     })
    