const request = require('request')

const geocode =(address,callback) =>{
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1553345035985&autocomplete=false&limit=1'
    request({url:geocodeURL, json:true},(error, response)=> {
        if(error){
            callback('Unable to connect to location service!', undefined)
        }
        else if (response.body.features.length === 0){
            callback('Unable to find location. Try another search!', undefined)
        }
        else{
            const output = {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            }
            callback(undefined,output)
        }
    })
}

module.exports = geocode