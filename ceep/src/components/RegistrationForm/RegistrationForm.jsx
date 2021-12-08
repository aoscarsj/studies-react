import React, { Component } from 'react';
import './style.css';

class RegistrationForm extends Component {
  
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }
  _handleChangeTitle(event) {
    /* O this em JS eh dinamico, nesse contexto funciona, mas no onChange, ao executar, o this la nao se refere a esse obj.
      para resolver eh necessario fazer o .bind e passar o obj do this como param
    */
    event.stopPropagation();
    this.title = event.target.value;
  }
  _handleChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }
  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text);
  }
  render() {
    return (
      <form className='registration-form' onSubmit={this._createNote.bind(this)}>
        <input
          type='text'
          placeholder='Title'
          className='registration-form_input'
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder='Write your note... '
          className='registration-form_input'
          onChange={this._handleChangeText.bind(this)}
        ></textarea>
        <button className='registration-form_input registration-form_submit'>
          Create note
        </button>
      </form>
    );
  }
}
export default RegistrationForm;
