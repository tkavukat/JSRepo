const fs = require('fs')

//Challenge: Work with JSON and the file system
//Load and Parse the JSON data
// Change the name and age property using your info
//stringify the changed object and overwrite the original data
//Test

const chalDataBuffer = fs.readFileSync('1-json.json')
const chalDataString = chalDataBuffer.toString()
const chalData = JSON.parse(chalDataString)
chalData.name = 'Resmi G'
chalData.age = '36'

const chalDataStringToWrite = JSON.stringify(chalData)
fs.writeFileSync('1-json.json',chalDataStringToWrite)

