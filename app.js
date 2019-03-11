const validator = require('validator')
const getNotes = require('./notes.js')

const myNotes = getNotes()

console.log(myNotes)

console.log(validator.isURL('rxnt.com'))

