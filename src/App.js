import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import { withFirebase } from './components/firebase/firebase';
import * as ROUTES from './constants/routes';
import HomeDashboard from './components/dashboards/HomeDashboard';
import ProgramDashboard from './components/dashboards/ProgramDashboard';
import MentorsDashboard from './components/dashboards/MentorsDashboard';
import ContactDashboard from './components/dashboards/ContactDashboard';
import Navbar from './components/layout/Navbar';
import AddMentor from './components/mentors/AddMentor';
import LogIn from './components/auth/LogIn';

class App extends Component {
  state = {
    auth: null
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(auth => {
      auth
        ? this.setState({ auth })
        : this.setState({ auth: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  handleSignout = () => {
    this.props.firebase.signOut();
  }

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {this.state.auth 
            ? <h1>admin</h1>
            : <h1>guest</h1>}
          <Switch>
            <Route exact path={ROUTES.LANDING} component={HomeDashboard} />
            <Route path={ROUTES.PROGRAM} component={ProgramDashboard} />
            <Route path={ROUTES.MENTORS} component={MentorsDashboard} />
            <Route path={ROUTES.CONTACT} component={ContactDashboard} />
            <Route path={ROUTES.ADD} component={AddMentor} />
            <Route path={ROUTES.ADMIN} component={LogIn} />
          </Switch>

          {this.state.auth 
            ? <div className='input-field add-mentor center'>
                <button className='btn pink lighten-1 z-depth-0' onClick={this.handleSignout}>Sign Out</button>
              </div>
            : null}
        </div>
      </BrowserRouter>
    );
  }
}

export default withFirebase(App);