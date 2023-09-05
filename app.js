const chalk = require("chalk")
const yargs = require("yargs")
const notes = require("./note.js");

yargs.command ({
    command:'Add',
    describe:'Add a note',
    builder:{
      title:{
        describe: 'note title',
        demandOption:true,
        typer: 'string'
      },
      body:{
        describe: 'note nody',
        demandOption:true,
        typer: 'string'
      },
    },
    handler:  (argv)=>{
        notes.addNote(argv.title, argv.body)
    }
});
yargs.command ({
    command:'Remove',
    describe:'Remove a note',
    builder:{
        title:{
          describe: 'note title',
          demandOption:true,
          typer: 'string'
        }},
    handler:  (argv)=>{
        notes.removeNote(argv.title)
    }
});
yargs.command ({
    command:'List',
    describe:'List all notes',
    handler: ()=>{
        notes.listNotes()
    }
});
yargs.command ({
    command:'Read',
    describe:'Read a note',
    builder:{
        title:{
          describe: 'note title',
          demandOption:true,
          typer: 'string'
        }},
    handler:  (argv)=>{
        notes.readNote(argv.title)
    }
});
yargs.parse();
