import React from 'react'

export default function MentorSummary({mentor}) {
  return (
    <div className='card z-dept-0 project-summary'>
      <div className='mentor-img'></div>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title'>{mentor.name}</span>
        <p className='grey-text'>{mentor.major}</p>
        <p>{mentor.description}</p>
      </div>
    </div>
  )
}
