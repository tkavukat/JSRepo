const request = require ('request')
const chalk = require('chalk')

const url = 'https://api.darksky.net/forecast/8592531de454db2c8476bae3b11ed3f5/37.8267,-122.4233?'

// Goal: Print a small forecast to the user
//
// 1. Print" It is currently <> degrees out. There is a <>% chance of rain
// 2. Test the app.

request({url:url, json:true},(error,response)=>{
    const data = response.body
    console.log('It is currently ' + data.currently.temperature + ' degrees out. There is a ' 
        + data.currently.precipProbability + '% chance of rain.')
})


