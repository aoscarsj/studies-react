import React, { Component } from 'react';
import './style.css';

class NoteCard extends Component {
  render() {
    return (
      <section className='card-nota'>
        <header>
          <h3>Title</h3>
        </header>
        <p>Write your notes here.</p>
      </section>
    );
  }
}

export default NoteCard;
