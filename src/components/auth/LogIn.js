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
    console.log(this.state);
    console.log(this.props);
  }

  handleSubmit = (e) => {
    this.props.firebase
      .signInWithPassword(this.state.password)
      .then(authUser => {
        this.props.history.push(ROUTES.LANDING);
        console.log('Logged In');
      })
      .catch(error => {
        console.log(error);
      });
    e.preventDefault();
  }

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit} className='white'>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default withFirebase(LogInForm);
