const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const forecastURL = 'https://api.darksky.net/forecast/8592531de454db2c8476bae3b11ed3f5/' + latitude + ',' + longitude
    //https://api.darksky.net/forecast/8592531de454db2c8476bae3b11ed3f5/37.8267,-122.4233
    request({url:forecastURL,json:true},(error,response) => {
        if(error){
            //call the callback function sent in the parameter of parent with correct error
            callback('Connection error', undefined)
        }
        else if(response.body.error){
            //call the callback function sent in the paramater of parent with the correct error
            callback('Invalid location error', undefined)
        }
        else{
            //call he callback function sent in the paramater of parent with the correct data
            callback(undefined, {
                summary: response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.',
                test:''
            })
        }
    })
}

module.exports = forecast