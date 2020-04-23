import React, { Component } from 'react'
import { withFirebase } from '../firebase/firebase';

class AddMentor extends Component {
  state = {
    name: 'Name',
    major: 'Major',
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
      this.setState({
        name: 'Name',
        major: 'Major',
        description: ''
      });
      console.log('Added a new mentor');
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <section id='add-container'>
        <div className='card'>
          <img className='mentor-img' alt='' />
          <div className='card-content grey-text text-darken-3'>
            <span className='card-title'>{this.state.name}</span>
            <p className='grey-text'>{this.state.major}</p>
          </div>
        </div>
        <form>
          <input className='name' placeholder="Name" autoComplete="off" type='text' id='name' onChange={this.handleChange} />
          <input className='major' placeholder="Major" autoComplete="off" type='text' id='major' onChange={this.handleChange} />
          <p>Mentor Description</p>
          <textarea className='mentor-textarea' id='description' onChange={this.handleChange} rows='15' cols='38' wrap="hard"></textarea>
          <button className='btn black' onClick={this.handleClick} type='reset'>Add</button>
        </form>
      </section>
    )
  }
}

export default withFirebase(AddMentor);