import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';
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
          <Route exact path='/' component={HomeDashboard} />
          <Route path='/program' component={ProgramDashboard} />
          <Route path='/mentors' component={MentorsDashboard} />
          <Route path='/contact' component={ContactDashboard} />
          <Route path='/add' component={AddMentor} />
          <Route path='/login' component={LogIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
