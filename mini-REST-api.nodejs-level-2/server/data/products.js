const fs = require('fs')

let products_all = fs.readFileSync("./server/data/products.json")

exports.all = function() {
    return products_all
}
exports.details = function (params) {                   /* params = [ { id: 'n' } ] */
    let obj_with_id = params.find(obj => obj["id"])
    let id_number   = obj_with_id.id                    /* { id: 'n' } */
    let parsedProducts = JSON.parse(products_all)
    let product = parsedProducts.find( p => p.id == id_number)
    if(product){
        return JSON.stringify(product)
    }else{
        return "NO SUCH PRODUCT"
    } 
}
exports.delete = function() {
    return "delete p1"
}
exports.save = function() {
    return "save new product"
}
