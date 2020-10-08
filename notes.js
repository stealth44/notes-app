const chalk=require('chalk')
const fs=require('fs');
//const { default: chalk } = require('chalk');
const getNotes= () => 'Your Notes..'

//adding notes
const addNotes= (title, body)=> {
    const notes=loadNotes()
//const noteDuplicates= notes.filter((note) => note.title == title)
    const noteDuplicate=notes.find((note) => note.title== title)


    if(!noteDuplicate){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note added!'))
    }else{
        console.log(chalk.red.inverse('Note already taken!'))
    }
 
}

//removing notes
const removeNotes=(title) => {
    const notes=loadNotes()
    const notestokeep=notes.filter((note) =>{
        return note.title != title
    })
    if(notes.length>notestokeep.length){
        console.log(chalk.green.inverse('Notes Removed'))
        saveNotes(notestokeep)
    }else{
        console.log(chalk.red.inverse('No Note Found'))
    }
   
}
//listing Notes
const listNotes= (title, body) =>{
    console.log(chalk.green.inverse('Listing Notes'))
    const notes=loadNotes()

    //using forEeach
    notes.forEach((notelist) => {
        console.log('Title: '+ notelist.title +' , '+ ' Body: '+notelist.body )
    })

    //using forloop
    // for (let x= 0; x< notes.length; x++) {
    //     const noteestitle = notes[x]
    //     console.log(noteestitle.title)
    // }
    
}
//Reading Notes
const readNotes= (title) => {
    const notes=loadNotes()
    
    const notefind=notes.find((note)=> note.title==title )

    if(!notefind){
      
        console.log(chalk.red.inverse('No Notes Found'))
    }else{
        console.log(chalk.inverse.green(note.title))
        console.log(note.body)
    }
}
//save Notes
const saveNotes=(notes) => {
        const datawrite= JSON.stringify(notes)
        fs.writeFileSync('notes.json',datawrite)
}
//load Notes
const loadNotes=() => {
    try {
        const dataBuffer=fs.readFileSync('notes.json')
        const dataString= dataBuffer.toString()
        return JSON.parse(dataString)
        
    }catch(e){
        return []
    }

}


module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    listNotes:listNotes,
    removeNotes:removeNotes,
    readNotes: readNotes
}