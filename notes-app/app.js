
const yargs = require('yargs')

const notes = require('./notes.js')

//customize yargs.version
yargs.version('1.1.0')

//Goal: Wire Up read command
//
// 1. Setup --title option for the command
// 2. Create and export readNote from notes.js
//  - Search for note by title
//  - Find note and Print title (styled) and body (styled)
//  - No note found Print error in red
// 2. Call listNotes from command handler
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
    handler(argv) {
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
    handler(argv){
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
    handler(){
        notes.listNotes()
    }
})

//Read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()

