import React, { Component } from 'react'
import { withFirebase } from '../firebase/firebase';

class AddMentor extends Component {
  state = {
    name: '',
    major: '',
    description: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleClick = () => {
    const docRef = this.props.firebase.firestore.collection('uwl').doc('mentors');
    this.props.handleChange(this.state);
    docRef.set({
      mentors: [...this.props.mentors, this.state]
    }).then(() => {
      // window.location.reload(false);
      console.log('Added a new mentor');
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className='card'>
        <img className='mentor-img' alt='' />
        <div className='card-content'>
          <form>
            <input placeholder="Name" autoComplete="off" type='text' id='name' onChange={this.handleChange} />
            <input className='major' placeholder="Major" autoComplete="off" type='text' id='major' onChange={this.handleChange} />
            <textarea className='mentor-textarea' id='description' onChange={this.handleChange} rows='8' cols='37' wrap="hard"></textarea>
            <input className='btn black add-mentor' onClick={this.handleClick} type='reset' value='Add'/>
          </form>
        </div>
      </div>
    )
  }
}

export default withFirebase(AddMentor);