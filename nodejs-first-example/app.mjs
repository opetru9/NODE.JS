// this is the main app mobile

// importing a global module:
import * as readline from 'node:readline'
import {stdin as input, stdout as output} from 'node:process'
// --

// custom module:
import {data_week} from './data.mjs'

const io = readline.createInterface({ input, output })

io.question('Choose the day (1..7)/(monday..sunday): ', day_number => {

    data_week.forEach( (day, index ) => {

        if (day_number.toLocaleLowerCase() == day.name){
            console.log(`[ ${day.date} ]: ${day.temp} `)
        }else if(index + 1 == +day_number){
            console.log(`[ ${day.date} ]: ${day.temp} `);
        }

    })

    io.close()
})
