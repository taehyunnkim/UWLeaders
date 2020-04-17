import React, { Component } from 'react'
import MentorList from '../mentors/MentorList';

export default class MentorsDashboard extends Component {
  state = {
    mentors: [
      {name: 'Jennifer Li', major: 'Informatics', description: 'Husky Tech, Informatics Undergraduate Student Association, Design For America, Peer Health Educator, Student Hall Council, Undergraduate Research, Indeed, Medzii, Seattle DUXX'},
      {name: 'Roshni Sinha', major: 'Biological Anthropology, International Studies ', description: 'UWL, Undergraduate Research (Sex Trafficking in King County & HR & Forensic Anthropology in Latin America), Unite UW, FYP Community Leader (RA), Student Life (marketing), CURE UW, Voyage UW, Alpha Phi Omega, SIAH, Anth. Honors (International adoption), Refugee Women’s Alliance, US Department of Justice'},
      {name: 'Marium Raza', major: 'Biochemistry', description: 'Undergraduate research @ Gordon Lab; URP; University District Street Medicine Volunteer Coordinator; Svoboda Project Intern; Mortar Board Honor Society President; UW Senior Class Gift Council Finance Administrator; I founded Elixir (elixirnonprofit.org), startup competitions, Young People For, American Medical Student Association, Race Ethnicity & Culture in Health, Volunteer at Seattle Childrens’'},
      {name: 'Andre Menchavez', major: 'Law, Societies, & Justice', description: 'GLAAD Campus Ambassador, International Student Mentorship Program, The Daily Column Writer, ASUW UW Leaders, UW Hip Hop Student Association Dance Captain, Filipino American Student Association, FIG Leader, Dawg Daze Leader, Huskies@Work, Purple & Bold Dance Team, Mentor Power for Success Program, Expression Over Oppression, Queer LiberAsian, GLAAD Junior Editor, QueerSpace Magazine Content Creator'},
      {name: 'Teanen Chen', major: 'Finance, Global Health', description: 'UWL Leader, Administrative Assistant to the Board of Directors, Social Media Intern with the Office of Outreach and Involvement, Director of the Office of Outreach and Involvement, Administrative Coordinator for Asian American Intervaristy , and VP of Professionalism for Delta Sigma Pi, Intern with Remarkably (women-owned tech in real estate), Finance Intern with Eileen Fisher (sustainable fashion company), Retail for Warby Parker, and Retail for Anthropologie'},
      {name: 'Espen Scheuer', major: 'Human Centered Design & Engineering', description: 'ASUW Board of Directors, Campus Sustainability Fund, Provost Advisory Committee for Students, College of Engineering Student Advisory Council, Student Technology Fee Committee, Research'}
    ]
  }

  render() {
    return (
      <div className='container'>
        <MentorList mentors={this.state.mentors} />
      </div>
    )
  }
}
