import React, { Component } from 'react';
import NoteList from './components/NoteList';
import RegistrationForm from './components/RegistrationForm';
import "./assets/app.css";
import './assets/index.css';

class App extends Component {
  render() {
    return (
      <section className="content">
        <RegistrationForm />
        <NoteList />
      </section >
    );
  }
}
export default App;
