const http = require("http")
const fs = require('fs')
const {port, host} = require('./server-config.json')
const { router } = require("./router")
const {route_aliases} = require("./router-config")


const server = http.createServer(( req , res ) => {
    const { url } = req;

    if( url == "/" ){
        const indexPage = fs.readFileSync("./server/public/index.html")
        res.end(indexPage)
    }else{
        router(url, route_aliases, res)
    }

    console.log(`>>incomming req ${url}`)
})

server.listen( port, host, () => {
    console.log('>>serve is running')
})

