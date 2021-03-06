import React from 'react'
import Leadership from '../../images/program/leadership.jpeg';
import Community from '../../images/program/community.jpg';
import Mentors from '../../images/program/mentors.jpg';

export default function ProgramDashboard() {
  return (
    <div id='program'>
      <section>
        <img alt='' src={Community} />
        <div>
          <h2>Find Your Community</h2>
          <p>
            Join a community of 60 motivated students who are passionate about leadership and change. 
            Bond with fellow leaders and grow by attending retreats and weekly leadership workshops.
          </p>
        </div>
      </section>
      <section>
        <img alt='uwl mentors' src={Mentors} />
        <div>
          <h2>Develop Through Mentorship</h2>
          <p>
            A large aspect of our program is providing leaders with guidance and friendship during their time 
            in the program and beyond. Towards the beginning of the program, Leaders are paired with a mentor 
            who will act as a resource and point of contact for essentially anything their mentees may need. 
            Our mentor team is extremely diverse and talented in terms of academic interests, 
            on and off-campus involvement, and professional ambitions. This creates a dynamic, 
            connected networking and resource hub available to all students in the program. 
          </p>
        </div>
      </section>
      <section>
        <img alt='leaders' src={Leadership} />
        <div>
          <h2>Practice Leadership</h2>
          <p>
            From TedxUofW to Husky for Suicide Prevention, past UW Leaders have created projects both 
            individually and on teams that have made a positive impact on our community. With the support 
            and guidance of their mentor, each Leader will design, plan, and execute their own “Leadership Practice” 
            to showcase their skills and act on their passions. We are continuing the tradition to have 
            our leaders present at the Spring Celebration of Service and Leadership!
          </p>
        </div>
      </section>
    </div>
  )
}
