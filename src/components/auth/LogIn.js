import React, { Component } from 'react'

export default class LogIn extends Component {
  state = {
    password: ''
  }

  handleSubmit = (e) => {
    console.log(e);
  }

  render() {
    return (
      <div className='container'>
        <h1 className='center-align'>ADMIN LOGIN</h1>
        <div className='form'>
          <form onSubmit={this.handleSubmit} className='white'>
            <div className='input-field'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' onChange={this.handleChange} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
