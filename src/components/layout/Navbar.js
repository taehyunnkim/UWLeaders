import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function Navbar() {
  return (
    <nav className='nav-wrapper white'>
      <div className='container'>
        <Link to={ROUTES.LANDING} className='title primary'>UW Leaders</Link>
        <ul className='right'>
          <li><NavLink to={ROUTES.PROGRAM} className='primary' activeClassName='active'>Program</NavLink></li>
          <li><NavLink to={ROUTES.MENTORS} className='primary'  activeClassName='active'>Mentors</NavLink></li>
          <li><NavLink to={ROUTES.CONTACT} className='primary' activeClassName='active'>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
