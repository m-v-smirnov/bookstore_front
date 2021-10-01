//import React from 'react';
import './App.css';
import { Login } from './components/Login';
import { Home } from './components/Home';
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps
} from 'react-router-dom';
import { ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { loginUserThunk, setStartLoading, setUser } from './store/users/userActions';
import { PrivateRoute } from './components/PrivateRoutes';

export default function App() {
  //  const dispatch: any = useAppDispatch()
  const { user } = useAppSelector((state) => state.user);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            {user ? <Redirect to="/" /> :<Login />}
          </Route>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}


