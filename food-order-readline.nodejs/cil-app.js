const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const { printMenu, printMessage, menu } = require("./food")

function mainLoop(){
    printMenu(menu, (option) => {
        
        let intOption = parseInt(option) 
        
        if (option != ""){
            if( option > menu.length){
                console.log("inexistent option !")
                setTimeout(mainLoop, 500)
            }
                console.log("You've chosen:", intOption)
                setTimeout(mainLoop, 500)
        }else{
            console.log("Input closed")
            rl.close()
        }
    })
}
mainLoop()
