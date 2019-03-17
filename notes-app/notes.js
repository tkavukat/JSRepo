const fs = require('fs')

const getNotes = function (){
    return "Your Notes ...."
}
const addNote = function(title,body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })
    if(duplicateNotes.length===0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added')
    }
    else{
        console.log('Note title taken')
    }
}

const saveNotes = function(notes){
    try{
        const dataJSONString = JSON.stringify(notes)
        fs.writeFileSync('notes.json',dataJSONString)
    }
    catch(e){

    }
}

const loadNotes = function(){
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
    addNote : addNote
}