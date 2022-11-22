const chalk = require("chalk");
const notes = require("./notes");
const yargs = require("yargs");

//create add command
yargs.command({
  command: "add",
  describe: "Add New Notes",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Notes Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

//remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNotes(argv.title);
  },
});

//list command
yargs.command({
  command: "list",
  describe: "list a note",
  handler: function () {
    notes.listNotes();
  },
});

//read command
yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

yargs.parse(); //to display in console log

//add, remove, read, list
// console.log(yargs.argv);
