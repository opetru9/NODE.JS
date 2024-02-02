const fs = require("fs")
let Food = require ("../Food.js")
const map = require("./map")

// ---Save a Class into json format---
save = (object, path ) => {
    object.type = object.constructor.name
    fs.writeFileSync( path , 
        JSON.stringify(object))
}
// save(new Food("Burger"), "./persistance/data/food.json")

// ---Load a json format Class ---
let load = (path) => {
    let data = JSON.parse(
        fs.readFileSync(path))
    const Clazz = require(map[data["type"]])

    let obj = new Clazz(data.name)
    return obj
}
let loadedData = load("./persistance/data/food.json")
console.log(loadedData)


// -------------------------------------------------------------


// ---Save literal object into json format---
// let data = {name:"salad"}
// fs.writeFileSync("./persistance/data/food.json", JSON.stringify(data))

// ---Load json format of a literal object---
// let data = fs.readFileSync("./persistance/data/food.json")
// console.log(data.toString())


// -------------------------------------------------------------


// ---Save variable to name.txt---
// let name = "Pizza"
// fs.writeFileSync("./persistance/data/name.txt", name)

// ---Load variable from name.txt ---
// let name = fs.readFileSync("./persistance/data/name.txt")
// console.log(name.toString())