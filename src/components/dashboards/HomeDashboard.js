import React from 'react'
import { UserContext } from '../session/session';
import logo from '../../images/uwl-logo.png';
import asuw from '../../images/asuw.png';

export default function HomeDashboard({handleSignout}) {

  return (
    <div className='home'>
      <div>
        <h1>Leaders Are <strong>Made</strong></h1>
        <h1>Not Born.</h1>
        <UserContext.Consumer>
          {auth => 
            auth
              ? <button className='btn-large homeBtn' onClick={handleSignout}>Sign Out</button>
              : <button className='btn-large homeBtn' onClick={handleSignout}>JOIN US</button>
              }
        </UserContext.Consumer>
      </div>
      <div className='logo'>
        <img src={logo} alt='uwleaders logo' width='200' height='200' />
      </div>
      <img className='asuw' src={asuw} alt='asuw logo' />
    </div>
  )
}
