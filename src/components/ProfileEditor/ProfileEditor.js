import React, { Component } from 'react';
import Inputs from '../Inputs/Inputs';
import './ProfileEditor.css';

export default class ProfileEditor extends Component {
  constructor() {
    super();
    this.state = {
      fields: ['Gender', 'Hair Color', 'Eye Color', 'Hobby', 'Birthday Day', 'Birthday Month', 'Birthday Year'],
      options: {
        'Gender': ['Male', 'Female'],
        'Hair Color': ['Brown', 'Blue', 'Green', 'Red', 'Blonde', 'White'],
        'Eye Color': ['Brown', 'Blue', 'Green'],
        'Hobby': ['Video Games', 'Hiking', 'Fishing', 'Rafting'],
        'Birthday Day': [],
        'Birthday Month': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'Birthday Year': []
      }
    }
  }

  setBirthdayOptions = () => {
    for (let i = 1; i <= 31; i++) {
      this.state.options['Birthday Day'].push(i);
    }
    for (let i = 2017; i >= 1917; i--) {
      this.state.options['Birthday Year'].push(i);
    }
  }

  render() {
    this.setBirthdayOptions();
    let inputFields = this.state.fields.map((field, i) => {
      return(<Inputs key={i} options={this.state.options[field]} field={field} />)
    })

    return(
      <div className='editor'>
        <div className='inputs'>
          <div className='field first_name_input'>
            <p>First Name</p>
            <input />
          </div>
          <div className='field last_name_input'>
            <p>Last Name</p>
            { inputFields }
          </div>
        </div>
      </div>
    )
  }
}