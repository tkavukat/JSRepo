const geocode = require ('./utils/geocode')

const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

<<<<<<< HEAD

const url = 'https://api.darksky.net/forecast/8592531de454db2c8476bae3b11ed3f5/37.8267,-122.4233?lang=en'

// Goal: Print a small forecast to the user
//
// 1. Print" It is currently <> degrees out. There is a <>% chance of rain
// 2. Test the app.

// request({url:url, json:true},(error,response)=>{
//     const data = response.body
//     console.log(data.daily.data[0].summary + 
//         ' It is currently ' + data.currently.temperature + ' degrees out. There is a ' 
//         + data.currently.precipProbability + '% chance of rain.')
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/-76.72497213243935%2C39.080422304194116.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1553344641527&autocomplete=true&types=place'
// request({ url: geocodeURL, json: true }, (error, response) => {
//     const latitude = response.body.features[0].center[0]
//     const longitude = response.body.features[0].center[1]
//     console.log(latitude, longitude)
// })




geocode('Odenton', (error,data) => { //always an error and data in callback
    console.log('Error', error)
    console.log('data', data)
=======
const location = process.argv[2] //first 2 in argv array are system level information
                                // 1. Node executable, 2. Name of the js file being executed
if(!location){
    return console.log('Enter a valid location!')
}

geocode(location,(error,{latitude,longitude,location}) => {
    if(error){
        return console.log('GeoCode Error:' + error)
    }
    console.log('Longitude:' + longitude)
    console.log('Latitude:' + latitude)
    forecast(latitude,longitude,(error,{summary}) => {
        if(error){
            return console.log('Forecast Error:' + error)
        }
        console.log('Current Forecast Summary for ' + location + ' is ' + summary)
    })
    
>>>>>>> 4df5748fdfe3010d8028f7b1150af51f0293f7b1
})
