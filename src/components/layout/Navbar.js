import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='nav-wrapper white'>
      <div className='container'>
        <Link to='/' className='title primary'>UW Leaders</Link>
        <ul className='right'>
          <li><NavLink to='/Program' className='primary' activeClassName='active'>Program</NavLink></li>
          <li><NavLink to='/Mentors' className='primary'  activeClassName='active'>Mentors</NavLink></li>
          <li><NavLink to='/Contact' className='primary' activeClassName='active'>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
