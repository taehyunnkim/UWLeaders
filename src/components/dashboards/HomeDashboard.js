import React, { Component } from 'react';
import { gsap, Power4 } from 'gsap';
import { UserContext } from '../session/session';
import logoFg from '../../images/logo-fg.png';

class HomeDashboard extends Component {

  componentDidMount() {
    gsap.to(this.content, 0.5, {
      opacity: 1,
      ease: Power4.easeIn
    });
    gsap.from(this.content, 1, {
      y: -30,
      ease: Power4
    });
    gsap.to(this.join, 0.5, {
      opacity: 1,
      delay: 0.7,
      ease: Power4.easeIn
    });
    document.addEventListener('mousemove', this.parallax);
  }

  parallax = (e) => {
    const width = document.body.getBoundingClientRect().width;
    const height = document.body.getBoundingClientRect().height;

    gsap.to(this.logoFg, 1, {
        x: (e.pageX - width / 2) / width * 15,
        y: (e.pageY - height / 2) / height * 15
    });

    gsap.to(this.logoBg, 1, {
      x: (e.pageX - width / 2) / width * -15,
      y: (e.pageY - height / 2) / height * -15
  });
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.parallax);
  }

  handleClick() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSf5YFCmsLo7fbQoTvdwNtKr3azzfEI_TWU8k_wsW05EASAZ4A/closedform', '_blank');
  }

  render(){
    return (
      <div className='home'>
        <div>
          <section ref={section => (this.content = section)}>
            <h1>Leaders Are <strong>Made</strong></h1>
            <h1>Not Born.</h1>
          </section>
          <UserContext.Consumer>
            {auth => 
              auth
                ? <button className='btn-large homeBtn' onClick={this.props.handleSignout}>Sign Out</button>
                : <div ref={div => (this.join = div)} className='join'>
                    <button className='btn-large homeBtn' onClick={this.handleClick}>Join Us</button>
                    <span>*Application Closed</span>
                    {/* <span>Due Sep.11</span> */}
                  </div>
                }
          </UserContext.Consumer>
        </div>
        <div ref={div => (this.img = div)} className='logo'>
          <img ref={img => (this.logoFg = img)} src={logoFg} alt='uwleaders' draggable="false" />
          <div ref={div => (this.logoBg = div)}></div>
        </div>
      </div>
    )
  }
}

export default HomeDashboard;
