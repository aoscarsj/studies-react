import React, { Component } from 'react';

class CategoriesList extends React.Component {
  _handleInputEvent(event) {
    if (event.key === 'Enter') {
      let category = event.target.value;
      this.props.addCategory(category);
    }
  }

  render() {
    return (
      <section>
        <ul>
          {this.props.categories.map((category, index) => {
            return <li key={index}>{category}</li>;
          })}
        </ul>
        <input
          type='text'
          placeholder='Add category'
          onKeyUp={this._handleInputEvent.bind(this)}
        />
      </section>
    );
  }
}

export default CategoriesList;
