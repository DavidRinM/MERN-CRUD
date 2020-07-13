const notesCtrl = {};

const noteModel = require("../models/Notes")

notesCtrl.getNotes = async (req, res) => {
    const notes = await noteModel.find(); //[{}] Finds all notes
    res.json(notes);
}

notesCtrl.createNote = async (req, res) => {
    const { title, content, author, date } = req.body;
    const newNote = new noteModel({
        title,
        content,
        author,
        date
    });
    
    await newNote.save();
    res.json({message: "Notes Saved"});

};

notesCtrl.getOneNote = async (req, res) => {
    const note = await noteModel.findById(req.params.id);
    res.json(note);
}

notesCtrl.updateNote = async (req, res) => {
    const { title, content, author } = req.body;

     await noteModel.findOneAndUpdate({_id: req.params.id}, {
        title,
        content,
        author
    })

    res.json({message: "Note Updated"});
}

notesCtrl.deleteNote = async (req, res) => {
    await noteModel.findByIdAndDelete(req.params.id);
    res.json({message: "Note Deleted"});
}

module.exports = notesCtrl;