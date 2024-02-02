const readline = require ("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

module.exports.printMenu = ( menu , cb ) => {
    menu.forEach( item => {
        console.log(item.print())
    })
    rl.question("Chose >>" , option => {
        cb( option )
    })
}

