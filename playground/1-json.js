const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}


const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)
