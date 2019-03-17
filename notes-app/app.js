
const chalk = require('chalk')
const yargs = require('yargs')

const getNotes = require('./notes.js')

//customize yargs.version
yargs.version('1.1.0')
//challenge: Add an option to yargs
//
// 1. Setup a body option for the add command
// 2. Configure a description, make it required, and for it to be a sstring
// 3. Log the body value in the handler function
// 4. Test your work!


//create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        description:{
            describe: 'Note description',
            demandOption: true,
            type: 'string',
        }
    },
    handler:function(argv){
        console.log('Title', argv.title)
        console.log('Notes description ---> ', argv.description)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a new note',
    handler:function(){
        console.log('Removing the note!')
    }
})

//
// Challenge: Add two new commands, list and read
//

//list command
yargs.command({
    command:'list',
    describe: 'List all notes',
    handler:function(){
        console.log('Listing the notes!')
    }
})

//Read command
yargs.command({
    command:'read',
    describe:'Read a note',
    handler: function(){
        console.log('Read a note')
    }
})
yargs.parse()
//console.log(yargs.argv)

