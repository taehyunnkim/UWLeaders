import React, { Component } from 'react'
import { withFirebase } from '../firebase/firebase';

class AddMentor extends Component {
  state = {
    name: 'Name',
    major: 'Major',
    description: '',
    url: ''
  };

  componentWillUnmount() {
    if(this.state.url !== '') {
      URL.revokeObjectURL(this.state.url);
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleAddMentor = () => {
    const docRef = this.props.firebase.firestore.collection('uwl').doc('mentors');
    this.props.handleChange(this.state);
    docRef.set({
      mentors: [...this.props.mentors, this.state]
    }).then(() => {
      this.setState({
        name: 'Name',
        major: 'Major',
        description: '',
        url: ''
      });
      console.log('Added a new mentor');
    }).catch(err => {
      console.log(err);
    })
  }

  handleAddImage = () => {
    this.fileInput.click();
  }

  handleChangeImage = () => {
    URL.revokeObjectURL(this.state.url);
    this.handleAddImage();
  }

  handleFile = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    this.setState({
      url: url
    });
  }

  render() {
    return (
      <section id='add-container'>
        <div className='card shadow'>
          <input type='file' onChange={this.handleFile} style={{display: 'none'}} ref={fileInput => this.fileInput = fileInput} />
          <div className='mentor-img' style={{backgroundImage: 'url(' + this.state.url + ')'}}></div>
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
          {
            this.state.url === '' ? <button className='btn black' onClick={this.handleAddImage}>Add Image</button>
                                  : <button className='btn black' onClick={this.handleChangeImage}>Change Image</button>
          }
          <button className='btn black' onClick={this.handleAddMentor} type='reset'>Add Mentor</button>
        </form>
      </section>
    )
  }
}

export default withFirebase(AddMentor);