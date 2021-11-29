import { Component } from 'react';
import NoteList from './components/NoteList';
import RegistrationForm from './components/RegistrationForm';

class App extends Component {
  render() {
    return (
      <section>
        <RegistrationForm />
        <NoteList />

      </section >

    );
  }

}

export default App;
