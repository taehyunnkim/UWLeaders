import React, { Component } from 'react'
import MentorSummary from '../mentors/MentorSummary';
import { withFirebase } from '../firebase/context';
import UserContext from '../session/context';
import AddMentor from '../mentors/AddMentor';
import Loader from 'react-loader-spinner'

class MentorsDashboard extends Component {
  state = {
    mentors: [],
    loading: true
  }

  // Implement feature where data is fetched only once
  // https://stackoverflow.com/questions/52929417/fetch-data-only-once-per-react-component?rq=1
  componentDidMount = () => {
    const docRef = this.props.firebase.firestore.collection('uwl').doc('mentors');
    docRef.get().then(doc => {
      if (doc.exists) {
          const mentors = doc.data().mentors;
          this.setState({mentors, loading: !this.state.loading});
      } else {
          console.log("No such document!");
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  handleChange = (mentor) => {
    this.setState({mentors: [...this.state.mentors, mentor]}, console.log(this.state));
  }

  handleDelete = (name) => {
    const docRef = this.props.firebase.firestore.collection('uwl').doc('mentors');
    const updatedList = this.state.mentors.filter(mentor => {
      return name !== mentor.name;
    });

    docRef.set({
      mentors: updatedList
    }).then(() => {
      console.log('Deleted ' + name);
      this.setState({mentors: updatedList});
    }).catch(err => {
      console.log(err);
    })

  }

  handleUpdate = (name) => {
    const docRef = this.props.firebase.firestore.collection('uwl').doc('mentors');
    const updatedList = this.state.mentors.filter(mentor => {
      return name !== mentor.name;
    });

    docRef.set({
      mentors: updatedList
    }).then(() => {
      console.log('Deleted ' + name);
      this.setState({mentors: updatedList});
    }).catch(err => {
      console.log(err);
    })

  }

  render() {
    return (
      <div className='container'>
        <UserContext.Consumer>
          {auth => 
            !this.state.loading && auth
              ? <AddMentor mentors={this.state.mentors} handleChange={this.handleChange} />
              : null}
        </UserContext.Consumer>
        <div className='mentors'>
          {this.state.loading 
            ? <Loader type="Grid" color="#4b2e83" height={60} width={60} />
            : this.state.mentors && this.state.mentors.map(mentor => {
                return(
                  <div key={mentor.name}>
                    <MentorSummary mentor={mentor} imgRef={mentor.name.replace(/\s+/g,'').toLowerCase()} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
                  </div>
                )
          })}
        </div>
      </div>
    )
  }
}

export default withFirebase(MentorsDashboard);