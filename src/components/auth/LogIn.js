import React, { Component } from 'react';
import { withFirebase} from '../firebase/firebase';
import * as ROUTES from '../../constants/routes';

class LogInForm extends Component {
  state = {
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit = (e) => {
    this.props.firebase
      .signInWithPassword(this.state.password)
      .then(authUser => {
        this.props.history.push(ROUTES.LANDING);
        console.log('Logged In');
      })
      .catch(error => {
        document.getElementById('password').innerText = 'Incorrect Password';
      });
    e.preventDefault();
  }

  render() {
    return (
      <div className='password-container'>
        <h2 id='password'>Admin Password</h2>
        <form onSubmit={this.handleSubmit}>
          <input className='password' autoComplete='off' type='password' id='password' onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default withFirebase(LogInForm);
