import React, { Component } from 'react';
import NoteList from './components/NoteList';
import RegistrationForm from './components/RegistrationForm';
import "./assets/app.css";
import './assets/index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: []
    }
  }

  createNote(title, text) {
    const newNote = { title, text };
    const newArrayNotes = { ...this.state.notas, newNote };
    const newState = {
      notas: newArrayNotes
    }
    this.setState(newState);
  }

  render() {
    return (
      <section className="content">
        <RegistrationForm createNote={this.createNote.bind(this)} />
        <NoteList notas={this.state.notas} />
      </section >
    );
  }
}
export default App;
