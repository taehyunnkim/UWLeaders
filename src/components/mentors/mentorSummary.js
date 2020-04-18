import React from 'react'
import UserContext from '../session/context'

export default function MentorSummary({mentor, imgRef, handleDelete, handleUpdate}) {
  return (
    <div>
      <div className='card z-dept-0 project-summary'>
        <img className='mentor-img' src={'/images/mentors/' + imgRef + '.jpg'} alt={mentor.name} />
        <div className='card-content grey-text text-darken-3'>
          <span className='card-title'>{mentor.name}</span>
          <p className='grey-text'>{mentor.major}</p>
          <p className='description'>{mentor.description}</p>
        </div>
      </div>
      <UserContext.Consumer>
        {auth =>
          auth 
            ? <div className='card-update text-center'>
                <button className='btn black' onClick={() => {handleUpdate(mentor.name)}}>Edit</button>
                <button className='btn red' onClick={() => {handleDelete(mentor.name)}}>Delete</button>
              </div>
            : null
        }
      </UserContext.Consumer>
    </div>
  )
}
