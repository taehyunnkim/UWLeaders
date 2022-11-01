import React from 'react'
import UserContext from '../session/context'

export default function MentorSummary({mentor, handleDelete, handleUpdate, toggle, popupData}) {
  return (
    <div>
      <div className='card z-dept-0 project-summary' onClick={() => {toggle(); popupData(mentor);}}>
        <div className='mentor-img' style={{backgroundImage: 'url(' + mentor.url + ')'}}></div>
        <div className='card-content grey-text text-darken-3'>
          <span className='card-title'>{mentor.name}</span>
          <p className='grey-text'>{mentor.major}</p>
        </div>
      </div>
      <UserContext.Consumer>
        {auth =>
          auth 
            ? <div className='card-update text-center'>
                <button className='btn black' onClick={() => {handleUpdate(mentor.name)}}>Edit</button>
                <button className='btn red' onClick={() => {handleDelete(mentor.name, mentor.url)}}>Delete</button>
              </div>
            : null
        }
      </UserContext.Consumer>
    </div>
  )
}
