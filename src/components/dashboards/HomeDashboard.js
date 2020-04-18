import React from 'react'
import { UserContext } from '../session/session';

export default function HomeDashboard({handleSignout}) {

  return (
      <div className='container'>
        <h5 className='grey-text text-darken-3'>Home</h5>
      <UserContext.Consumer>
        {auth => 
          auth
            ? <div className='container center'>
                  <button className='btn black lighten-1 z-depth-0' onClick={handleSignout}>Sign Out</button>
              </div>
            : null}
      </UserContext.Consumer>
    </div>
  )
}
