//import React from 'react';
import './App.css';
import { Login } from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



export default function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

