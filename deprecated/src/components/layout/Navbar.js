import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import UserContext from '../session/context';

export default function Navbar() {
  return (
    <nav>
      <UserContext.Consumer> 
        {auth =>
          auth 
          ? <Link to={ROUTES.LANDING} className='title'><span>UW</span> Leaders <span className='status'>/ ADMIN</span></Link> 
          : <Link to={ROUTES.LANDING} className='title'><span>UW</span> Leaders</Link>
        }
      </UserContext.Consumer>
      <ul>
        <li><NavLink to={ROUTES.PROGRAM} activeClassName='active'>Program</NavLink></li>
        <li><NavLink to={ROUTES.MENTORS} activeClassName='active'>Mentors</NavLink></li>
        <li><NavLink to={ROUTES.CONTACT} activeClassName='active'>Contact</NavLink></li>
      </ul>
    </nav>
  )
}
