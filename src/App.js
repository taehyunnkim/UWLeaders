import React, {Component} from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import { UserContext } from './components/session/session';
import { withFirebase } from './components/firebase/firebase';
import * as ROUTES from './constants/routes';
import HomeDashboard from './components/dashboards/HomeDashboard';
import ProgramDashboard from './components/dashboards/ProgramDashboard';
import MentorsDashboard from './components/dashboards/MentorsDashboard';
import ContactDashboard from './components/dashboards/ContactDashboard';
import Navbar from './components/layout/Navbar';
import AddMentor from './components/mentors/AddMentor';
import LogIn from './components/auth/LogIn';

// Implement higher-order component for user-context.

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

  handleSignout = () => {
    this.props.firebase.signOut();
  }

  render () {
    return (
      <UserContext.Provider value={this.state.auth}>
        <HashRouter basename='/'>
          <div className="App container">
            <Navbar />
            <Switch>
              <Route exact path={ROUTES.LANDING} render={(props) => <HomeDashboard {...props} handleSignout={this.handleSignout}/>}/>
              <Route path={ROUTES.PROGRAM} component={ProgramDashboard} />
              <Route path={ROUTES.MENTORS} component={MentorsDashboard} />
              <Route path={ROUTES.CONTACT} component={ContactDashboard} />
              <Route path={ROUTES.ADD} component={AddMentor} />
              <Route path={ROUTES.ADMIN} component={LogIn} />
            </Switch>
          </div>
        </HashRouter>
      </UserContext.Provider>
    );
  }
}

export default withFirebase(App);