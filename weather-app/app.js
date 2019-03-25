const request = require ('request')
const chalk = require('chalk')
const geocode = require('./utils/geocode')

geocode('1234',(error,response) => {
    if(error){
        console.log('Error:' + error)
    }
    else{
        console.log('Longitude:' + response.longitude)
        console.log('Longitude:' + response.latitude)
    }
}
)