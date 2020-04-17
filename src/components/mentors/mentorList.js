import React from 'react'
import MentorSummary from './MentorSummary';

export default function MentorList({ mentors }) {
  return (
    <div className='container mentors'>
    {mentors && mentors.map(mentor => {
      return(
        <div key={mentor.name}>
          <MentorSummary mentor={mentor} />
        </div>
      )
    })}
    </div>
  )
}
