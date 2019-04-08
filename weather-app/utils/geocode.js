<<<<<<< HEAD
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
=======
const request = require ('request')

const geocode = (place,callback) => {
    const mapURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(place) + '.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1553279097410&types=place&limit=1'
    request({url:mapURL,json:true},(error,response)=>{
        if(error){
            callback('No connection available',undefined)
            
        } else if(response.errCode || response.body.error || response.body.features.length < 1){
            callback('An error occured, please retry with a new location',undefined)
        }
        else{
            const data = response.body
            callback(undefined,{
                    longitude: data.features[0].center[0],
                    latitude: data.features[0].center[1],
                    location: response.body.features[0].place_name 
            })
>>>>>>> 4df5748fdfe3010d8028f7b1150af51f0293f7b1
        }
    })
}

module.exports = geocode