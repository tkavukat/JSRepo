const https = require('https')

const url = 'https://api.darksky.net/forecast/8592531de454db2c8476bae3b11ed3f5/37.8267,-122.4233'

const request = https.request(url,(response) => {
    let data = ''
    response.on('data',(chunk) => {
        data = data + chunk.toString()
    })

    response.on('end',() => {
        console.log(JSON.parse(data))
    })
})
request.on('error',()=>{
    console.log('An error ', error)
})
request.end()
