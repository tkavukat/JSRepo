const fs = require('fs')
const chalk = require('chalk')

const getNotes=() => {
    "Your Notes ...."
}

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    if(duplicateNotes.length===0){
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

module.exports = {
    getNotes: getNotes,
    addNote : addNote,
    removeNote: removeNote
}