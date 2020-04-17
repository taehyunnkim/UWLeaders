import React, { Component } from 'react'

export default class AddMentor extends Component {
  state = {
    name: '',
    major: '',
    description: ''
  }
  render() {
    return (
      <div className='container'>
        <div className='form'>
          <div className='mentor-img center'></div>
          <form onSubmit={this.handleSubmit} className='white'>
            <div className='input-field'>
              <label htmlFor='mentorname'>Name</label>
              <input type='text' id='mentorname' onChange={this.handleChange} />
            </div>
            <div className='input-field'>
              <label htmlFor='major'>Major</label>
              <input type='text' id='major' onChange={this.handleChange} />
            </div>
            <div className='input-field'>
              <label htmlFor='description'>Description</label>
              <textarea className='materialize-textarea' id='description' onChange={this.handleChange}></textarea>
            </div>
            <div className='input-field add-mentor center'>
              <button className='btn pink lighten-1 z-depth-0'>Add Mentor</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
