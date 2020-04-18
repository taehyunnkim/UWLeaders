import React from 'react'
import { UserContext } from '../session/session';

export default function HomeDashboard({handleSignout}) {

  return (
    <div className='home text-center'>
      <img src='/uwleaders.svg' alt='uwleaders logo' width='200' height='200' />
      <h1 className=''>Leaders Are <strong>Made</strong></h1>
      <h1 className=''>Not Born.</h1>
      <UserContext.Consumer>
        {auth => 
          auth
            ? <button className='btn homeBtn' onClick={handleSignout}>Sign Out</button>
            : <button className='btn homeBtn' onClick={handleSignout}>JOIN US</button>
            }
      </UserContext.Consumer>
      <img className='asuw' src='/images/asuw.png' alt='asuw logo' />
    </div>
  )
}
