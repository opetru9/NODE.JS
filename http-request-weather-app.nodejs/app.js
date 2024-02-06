const http = require('http');
const { KEY, HOST, PATH } = require('./config.json');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

renderLoop()
function renderLoop(){
    rl.question("Chose City>>", cityName => {
        if (cityName !== "") {
            const req = http.request({
                host: HOST,
                path: PATH + `?q=${cityName}&appid=${KEY}&units=metric`,
                port: 80,
                method: 'GET'
            }, callback);
            req.end(); 
            setTimeout(renderLoop , 500)
        } else {
            console.log('Byee!');
            rl.close(); 
        }
    });
    
    function callback(res) {    

        res.on('data', (chunk) => {

            const weatherData = JSON.parse(chunk);

            if( weatherData.cod == '200'){
                console.log('temp:     ' + weatherData.main.temp + ' °C' + '\n' +
                            'temp_min: ' + weatherData.main.temp_min + ' °C' + '\n' +
                            'temp_max: ' + weatherData.main.temp_max + ' °C' + '\n');
                }else{
                    console.log("Sorry, can't find this city(( ")
                }
        })

        res.on('end', () => {
            console.log('Enter another city name or press ENTER to quit')
        });
    
        res.on('error', (error) => {
            console.error('Error:', error);
        });
    }
}

