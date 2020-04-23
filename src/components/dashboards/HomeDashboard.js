import React, { Component } from 'react';
import { gsap, Power4 } from 'gsap';
import { UserContext } from '../session/session';
import logoBg from '../../images/logo-bg.png';
import logoFg from '../../images/logo-fg.png';
import asuw from '../../images/asuw.png';

class HomeDashboard extends Component {

  componentDidMount() {
    gsap.to(this.content, 0.5, {
      opacity: 1,
      ease: Power4.easeIn
    });
    gsap.from(this.content, 1, {
      y: 30,
      ease: Power4
    });
    document.addEventListener('mousemove', this.parallax);
  }

  parallax = (e) => {
    const width = document.body.getBoundingClientRect().width;
    const height = document.body.getBoundingClientRect().height;

    gsap.to(this.logoFg, 1, {
        x: (e.pageX - width / 2) / width * 5,
        y: (e.pageY - height / 2) / height * 15
    });

    gsap.to(this.logoBg, 1, {
      x: (e.pageX - width / 2) / width * -5,
      y: (e.pageY - height / 2) / height * -15
  });
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.parallax);
  }

  render(){
    return (
      <div className='home'>
        <div ref={div => (this.content = div)}>
          <h1>Leaders Are <strong>Made</strong></h1>
          <h1>Not Born.</h1>
          <UserContext.Consumer>
            {auth => 
              auth
                ? <button className='btn-large homeBtn' onClick={this.props.handleSignout}>Sign Out</button>
                : <button className='btn-large homeBtn' onClick={this.props.handleSignout}>JOIN US</button>
                }
          </UserContext.Consumer>
        </div>
        <div ref={div => (this.img = div)} className='logo'>
          <img ref={img => (this.logoFg = img)} src={logoFg} alt='uwleaders' />
          <img ref={img => (this.logoBg = img)} src={logoBg} alt='uwleaders' />
        </div>
        <img className='asuw' src={asuw} alt='asuw logo' />
      </div>
    )
  }
}

export default HomeDashboard;
