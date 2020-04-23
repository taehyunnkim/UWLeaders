import React, { Component } from 'react'

export default class ContactDashboard extends Component {
  render() {
    return (
      <div id='contact'>
        <section>
          <h3>Roshni Sinha – Director</h3>
          <p>asuwlead@uw.edu</p>
          <h3>Jennifer Li – Assistant Director</h3>
          <p>asuwola@uw.edu</p>
          <h3>Eric Kim – Web Developer</h3>
          <p>kim2000@uw.edu / erickim.dev</p>
        </section>

        <p className='office'>
          Our office is located in the HUB 131C, so feel free to stop by during our 
          office hours if you have questions, or if you just want to talk!
          <br/>
          Our door is open for you to stop by, have some tea & coffee,
          and ask questions.
        </p>

        <nav>
          <ul>
            <li><a href='https://www.facebook.com/uwleaders' target='_blank' rel="noopener noreferrer">Facebook</a></li>
            <li><a href='https://www.instagram.com/uwleaders/?hl=en' target='blank' rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}
