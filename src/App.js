import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import * as ROUTES from './constants/routes';
import HomeDashboard from './components/dashboards/HomeDashboard';
import ProgramDashboard from './components/dashboards/ProgramDashboard';
import MentorsDashboard from './components/dashboards/MentorsDashboard';
import ContactDashboard from './components/dashboards/ContactDashboard';
import Navbar from './components/layout/Navbar';
import AddMentor from './components/mentors/AddMentor';
import LogIn from './components/auth/LogIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={ROUTES.LANDING} component={HomeDashboard} />
          <Route path={ROUTES.PROGRAM} component={ProgramDashboard} />
          <Route path={ROUTES.MENTORS} component={MentorsDashboard} />
          <Route path={ROUTES.CONTACT} component={ContactDashboard} />
          <Route path={ROUTES.ADD} component={AddMentor} />
          <Route path={ROUTES.ADMIN} component={LogIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
