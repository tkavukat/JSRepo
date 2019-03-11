
const chalk = require('chalk')
const getNotes = require('./notes.js')

const myNotes = getNotes()

console.log(myNotes)


//Use chalk library
// Install version 2.4.1 of hcalk
// Load chalk into app.js
// Use chalk to print the string "Success" to the console in green
// Test the work
// Make test bold and inversed

const boldinverse= chalk.green.bold.inverse;

console.log(chalk.green('Success!'))
console.log(boldinverse('My highlighted bold inverse string'))