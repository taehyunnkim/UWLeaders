import React, { Component } from 'react'
import MentorList from '../mentors/MentorList';

export default class MentorsDashboard extends Component {
  render() {
    return (
      <div className='container'>
        <MentorList />
      </div>
    )
  }
}
