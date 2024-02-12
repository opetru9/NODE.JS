const fs = require('fs')

exports.router = function (url, aliases, res){

        // ---- ROUNTING ----
        const [path, queryString] = url.split('?'); /*HM1 */
        let params

        if(queryString){
            params = queryString.split("&").map( value =>{
                obj = {}
                obj[value.split("=")[0]] = value.split("=")[1]
                return obj
            })
        }

        let alias = aliases.find(obj => obj[path])
        alias = alias ? alias[path] : path
     
        // auto routing : [Module] / [Function] 
        let segments = alias.split("/")
        let [ n, module_name, function_name ] = segments /* "" */ /* products */ /* all */

        // guard for error:
        if (fs.existsSync(`./server/data/${module_name}.js`)) {

            const module_object = require(`./data/${module_name}.js`)
            res.end(module_object[function_name](params))

        } else {
            res.end('404 - NOT FOUND')
        }
}