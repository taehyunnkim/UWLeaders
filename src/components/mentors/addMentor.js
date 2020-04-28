import React, { Component } from 'react'
import { withFirebase } from '../firebase/firebase';

class AddMentor extends Component {
  state = {
    name: 'Name',
    major: 'Major',
    description: '',
    url: '',
    file: null
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
    const storageRef = this.props.firebase.storage.ref();
    const {file, ...omitted} = this.state;
    if (this.state.file) {
      storageRef.child(this.state.name).put(this.state.file).then(snapshot => {
        snapshot.ref.getDownloadURL()
        .then(url => {
          omitted.url = url;
        })
        .then(() => {
          docRef.set({
            mentors: [...this.props.mentors, omitted]
          }).then(() => {
            console.log('Added a new mentor with image');
            console.log(omitted);
            this.props.handleChange(omitted);
          }).catch(err => console.log(err))
        })
        .catch(err => console.log(err));
      });
    } else {
      docRef.set({
        mentors: [...this.props.mentors, omitted]
      }).then(() => {
        console.log('Added a new mentor without image');
        this.props.handleChange(omitted);
      }).catch(err => console.log(err))
    }

    this.setState({
      name: 'Name',
      major: 'Major',
      description: '',
      url: '',
      file: null
    });
  }

  handleAddImage = () => {
    this.fileInput.click();
  }

  handleChangeImage = () => {
    URL.revokeObjectURL(this.state.url);
    this.handleAddImage();
  }

  handleFile = (e) => {
    const file = e.target.files[0];
    if(file && file['type'].split('/')[0] === 'image') {
      const url = URL.createObjectURL(file);
      this.setState({
        url: url,
        file: e.target.files[0]
      });
    } else {
      console.log('Cancelled or not a valid file');
    }
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