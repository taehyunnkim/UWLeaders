import React, { Component } from 'react'
import MentorSummary from '../mentors/MentorSummary';
import { withFirebase } from '../firebase/context';
import UserContext from '../session/context';
import AddMentor from '../mentors/AddMentor';
import Loader from 'react-loader-spinner';
import EditMentor from '../mentors/EditMentor';
import Popup from '../mentors/Popup';

class MentorsDashboard extends Component {
  state = {
    mentors: [],
    loading: true,
    editMentor: {},
    showPopup: false,
    popupData: {}
  }

  componentDidMount = () => {
    const docRef = this.props.firebase.firestore.collection('uwl').doc('mentors');
    docRef.get().then(doc => {
      if (doc.exists) {
          const mentors = doc.data().mentors;
          this.setState({mentors, loading: false});
      } else {
          console.log("No such document!");
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  handleChange = (newMentor) => {
    this.setState({mentors: [...this.state.mentors, newMentor]});
  }

  handleEdit = (updatedMentors) => {
    this.setState({mentors: updatedMentors});
  }

  resetEdit = () => {
    this.setState({editMentor: {}});
  }

  handleDelete = (name, url) => {
    const docRef = this.props.firebase.firestore.collection('uwl').doc('mentors');
    const storageRef = this.props.firebase.storage.ref();
    const updatedList = this.state.mentors.filter(mentor => {
      // Maybe do something here instead of using findMentor()
      return name !== mentor.name;
    });

    docRef.set({
      mentors: updatedList
    }).then(() => {
      console.log('Deleted ' + name);
      this.setState({mentors: updatedList});
    }).then(() => {
      if (url !== '') {
        storageRef.child(name).delete()
        .catch(err => console.log(err));
      }
    }).catch(err => {
      console.log(err);
    })
  }

  handleDeleteImage = (name) => {
    const storageRef = this.props.firebase.storage.ref();
    storageRef.child(name).delete()
    .then(() => console.log('Deleted image from firebase'))
    .catch(err => console.log(err));
  }

  handleUpdate = (name) => {
    let mentorObj = {};
    window.scrollTo(0, 0);
    mentorObj = this.findMentor(name);
    this.setState({editMentor: mentorObj});
  }

  findMentor = (name) => {
    for (let i = 0; i < this.state.mentors.length; i++) {
      if (this.state.mentors[i].name === name) {
        return this.state.mentors[i];
      }
    }

    return null;
  }

  popupData = (mentor) => {
    this.setState({popupData: mentor});
  }

  popupToggle = () => {
    this.setState({showPopup: !this.state.showPopup});
  }

  render() {
    let showPopup = this.state.showPopup;
    let popup;
    if (showPopup) {
      popup = <Popup mentor={this.state.popupData} toggle={this.popupToggle} />;
    } else {
      popup = null;
    }
    return (
      <div className='container'>
        <UserContext.Consumer>
          {auth => {
            if(!this.state.loading && auth) {
              if(Object.keys(this.state.editMentor).length !== 0) {
                return <EditMentor mentors={this.state.mentors} handleEdit={this.handleEdit} edit={this.state.editMentor} resetEdit={this.resetEdit} handleDelete={this.handleDeleteImage} />
              } else {
                return <AddMentor mentors={this.state.mentors} handleChange={this.handleChange} />
              }
            } else {
              return null;
            }
          }
          }
        </UserContext.Consumer>
        <div className='mentors'>
          {this.state.loading 
            ? <div style={{marginTop: '70px'}}><Loader type="ThreeDots" color="#b7a57a" height={50} width={50} /></div>
            : this.state.mentors && this.state.mentors.map(mentor => {
                return(
                  <div key={mentor.name}>
                    <MentorSummary mentor={mentor} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} toggle={this.popupToggle} popupData={this.popupData} />
                  </div>
                )
          })}
        </div>
        {popup}
      </div>
    )
  }
}

export default withFirebase(MentorsDashboard);