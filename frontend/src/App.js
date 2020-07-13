import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import $ from 'jquery'
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./Components/Navigation";
import NotesList from "./Components/NotesList";
import CreateNote from "./Components/CreateNotes";
import CreateUser from "./Components/CreateUsers";

function App() {
  return (
    <Router>
      <Navigation />

      <div className="container p-4">
        <Route path="/" component={NotesList} exact />
        <Route path="/edit/:id" component={CreateNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
