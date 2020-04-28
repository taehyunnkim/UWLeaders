import React, { Component } from 'react'
import { gsap, Power4 } from 'gsap';

export default class Popup extends Component  {
  componentDidMount() {
    gsap.from(this.bg, 0.5, {
      opacity: 0,
      ease: Power4
    });
    
    gsap.from(this.popup, 0.5, {
      y: -100,
      opacity: 0,
      ease: Power4
    });
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <div ref={div => (this.bg = div)} className='popup'>  
          <div ref={div => (this.popup = div)} className='popup-inner'>
            <section>
              <div className='popup-img' style={{backgroundImage: 'url(' + this.props.mentor.url + ')'}}></div>
            </section>
            <section>
              <div>
                <h1>{this.props.mentor.name}</h1>
                <h2>{this.props.mentor.major}</h2>
                <p>{this.props.mentor.description}</p>
              </div>
              <button className='btn-pop black' onClick={() => 
                {
                  Promise.all([
                    gsap.to(this.popup, 0.3, {
                      y: 100,
                      opacity: 0,
                      ease: Power4
                    }),
                    gsap.to(this.bg, 0.3, {
                      opacity: 0,
                      ease: Power4
                    })
                  ]).then(() => this.props.toggle())
                }
              }>Close</button>
            </section>
          </div>  
        </div>  
      </div>
    )
  }
}
