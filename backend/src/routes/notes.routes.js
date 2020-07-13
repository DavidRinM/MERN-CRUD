const { Router } = require("express");
const router = Router();

const { getNotes, createNote, getOneNote, updateNote, deleteNote } = require("../controllers/notesController")

router.route("/")
    .get(getNotes)
    .post(createNote)

router.route("/:id")
    .get(getOneNote)
    .put(updateNote)
    .delete(deleteNote)
    
module.exports = router;