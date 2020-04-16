import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import MentorsDashboard from './components/dashboard/MentorsDashboard';
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/Mentors' component={MentorsDashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
