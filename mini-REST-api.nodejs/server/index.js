const http = require("http")
const {port, host, access_key} = require('./config.json')
const fs = require('fs')

const server = http.createServer(( req , res ) => {
    const { url } = req

    if( url == "/" ){

        const indexPage = fs.readFileSync('./server/public/index.html')
        res.end(indexPage)

    }else if (url.startsWith("/api/")){

        // split path:
        let local_url = url.split('?')[0]
        let params    = url.split('?')[1]
        let key       = params.split('=')[1]

        if(key !== access_key){
            return res.end("access denied!")
        }

        if (local_url.endsWith("/products/all")){

            const products = fs.readFileSync('./server/data/products.json')
            res.end(products)

        } else if (local_url.endsWith("/products/category")){

            const products = JSON.parse(
                fs.readFileSync('./server/data/products.json')
            )
            const productsFiltered = []
            for(let i=0; i< products.length; i++){
                if(products[i].category == "category 1"){
                    productsFiltered.push(products[i])
                }
            }
            res.end(JSON.stringify(productsFiltered))

        }
        else{
            res.end('API not found')
        }

    }else{
        res.end("not found")
    }

    console.log(`>>incomming req ${url}`)
})

server.listen( port, host, () => {
    console.log('>>serve running')
})