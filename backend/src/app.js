const express = require("express");
const cors = require("cors");
const app = express();

//Settings
app.set("port", process.env.PORT || 4000); //if env port exisst or 4000


//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/notes", require("./routes/notes.routes"));

module.exports = app;