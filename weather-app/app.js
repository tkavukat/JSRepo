const request = require ('request')
const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2] //first 2 in argv array are system level information
                                // 1. Node executable, 2. Name of the js file being executed
if(!location){
    return console.log('Enter a valid location!')
}

geocode(location,(error,data) => {
    if(error){
        return console.log('GeoCode Error:' + error)
    }
    console.log('Longitude:' + data.longitude)
    console.log('Latitude:' + data.latitude)
    forecast(data.latitude,data.longitude,(error,forecastData) => {
        if(error){
            return console.log('Forecast Error:' + error)
        }
        console.log('Current Forecast Summary for ' + data.location + ' is ' + forecastData.summary)
    })
    
})
