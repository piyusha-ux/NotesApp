const chalk = require("chalk");
const fs = require("fs");

const getNotes = () => {
  return "Your Notes ....";
};

//list notes
const listNotes = () => {
  const notes = loadNotes();
  console.log(notes);
  notes.forEach((note) => {
    console.log(note.title);
  });
};

//adding a note

const addNotes = (title, body) => {
  const notes = loadNotes();

  //array filter method
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length == 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("new note added !"));
  } else {
    console.log(chalk.red.inverse("note already exist."));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    const dataJSON = notesBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//removing a note
const removeNotes = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title != title;
  });
  saveNotes(notesToKeep);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note Removed!"));
  } else {
    console.log(chalk.red.inverse("no note found !"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
};
