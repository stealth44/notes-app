const chalk=require('chalk');
const validator=require('validator');
const yargs=require('yargs');
//const { require } = require('yargs');
const notes= require('./notes.js')
yargs.version('1.1.0')
//adding a new note
yargs.command({
    command: 'add',
    decribe: 'Adding new notes',
    builder:{
        title:{
            describe: 'Notes Title',
           demandOption: true,
            type:'string'
        },
        body:{
            describe: "Notes Body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
      notes.addNotes(argv.title, argv.body)          
    }
})
//removing notes
yargs.command({
    command:'remove',
    describe:'Removing notes',
    builder:{
        title:{
            decribe: 'Notes Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})
//listing notes
yargs.command({
    command:'list',
    describe: 'Listing notes',
    handler(argv){
        notes.listNotes(argv.title, argv.body)
    }
})
//reading notes
yargs.command({
    command:'read',
    describe:'Reading notes',
    builder:{
        title:{
            describe: 'Read Notes',
            demandOption: true,
            typeo: 'string'
        },
    handler(argv){
      notes.readNotes(argv.title)
    }
}
})
yargs.parse()
//console.log(yargs.argv)
//console.log(validator.isURL('https://Getford.com'))
//console.log(validator.isDate('2020-08-27', newDate()))
//console.log(validator.isEmpty('ggg'))