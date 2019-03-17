
const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')

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
        body:{
            describe: 'Note description',
            demandOption: true,
            type: 'string',
        }
    },
    handler:function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
/*
1. Setup the remove command to take a required "--title" option
2. Create and export a removeNote function from notes.js
3. Call removeNote in remove command handler
4. Have removeNote log the title of the note to be removed
5. Test your work using node app.js --title="some title"
*/

yargs.command({
    command:'remove',
    describe: 'Remove a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler:function(argv){
        //Callfunction from notes.js
        console.log('Removing the note!')
        notes.removeNote(argv.title)
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

