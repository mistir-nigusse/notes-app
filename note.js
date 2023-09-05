const fs = require('fs');

const getNotes= ()=>{
  return "your notes";
}
const loadNotes = () => {
  try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  }
  catch(e){
    return [];
  }
  
}
const addNote = (title, body)=>{
    const notes = loadNotes()

    const duplicatedNote = notes.find( (note)=>note.title === title )
    if (!duplicatedNote){
      notes.push({
        title:title,
        body:body
     })
     saveNotes(notes)
     console.log('note added successfully')
    }
    else {
      console.log('note title is duplicated')
    }

    
}
const removeNote =(title)=>{
  const notes = loadNotes();
  const notesToKeep = notes.filter ( (note)=> note.title !== title)
  if(notes.length > notesToKeep.length){
    console.log("note " + title +" is deleted")

    saveNotes(notesToKeep)

  }
  else {
    console.log('no note found')

  }
  

}
const listNotes = ()=>{
  const notes = loadNotes()
  console.log('your notes');
  notes.forEach((note)=>{
    console.log(note.title)
  })
}
const readNote = (title)=>{
  const notes = loadNotes();
  const noteToRead = notes.find( (note)=>note.title === title )
  if(noteToRead){
    console.log(noteToRead.title);
    console.log(noteToRead.body);
  }
  else {
    console.log('note not found')
  } 
}
const saveNotes =  (notes)=>{
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
}
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};