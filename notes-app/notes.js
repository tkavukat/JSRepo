const fs = require('fs')
const chalk = require('chalk')

const getNotes=() => {
    "Your Notes ...."
}

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    }
    else{
        console.log('Note title taken')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Found and removed notes with title "' + title + '"'))
    }
    else{
        console.log(chalk.red.inverse('No notes with title "' + title + '" found.'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    var count = 0
    if(notes.length > 0){
        console.log(chalk.green.inverse('Your notes'))
        notes.forEach(note => {
            count++
            console.log(count + '. ' + note.title)
        });
    }
    else{
        console.log(chalk.red.inverse('No notes in the list!'))
    }
}

const saveNotes = (notes) => {
    try{
        const dataJSONString = JSON.stringify(notes)
        fs.writeFileSync('notes.json',dataJSONString)
    }
    catch(e){
        console.log('error in write notes ' + e.toString())
    }
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json',{encoding:'utf8'})
        const dataJSONString = dataBuffer.toString(dataBuffer)
        return JSON.parse(dataJSONString)
    }
    catch(e){
        console.log('error in read notes ' + e.toString())
        return []
    }
}

const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.italic(note.title) + '   ' + chalk.bold(note.body))
    }
    else{
        console.log(chalk.inverse.red('Ttile not found'))
    }
}
module.exports = {
    getNotes: getNotes,
    addNote : addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}