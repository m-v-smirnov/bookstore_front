import './App.css';
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks';
import { PrivateRoute } from './components/PrivateRoutes';
import { UserLoadingPage } from './components/UserLoadingPage';
import { useEffect, useState } from 'react';
import { loginByTokenThunk } from './store/users/userActions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// type ParamsType = {
//   page?: string,
//   genreId?: string,
//   priceMax?: string,
//   priceMin?: string 
// };

export default function App() {
  const dispatch: any = useAppDispatch();
  const { user, error } = useAppSelector((state) => state.user);
  const [isLoaded, setLoaded] = useState(false);
  const token = localStorage.getItem('token');
  
  
  //const { page, genreId, priceMax, priceMin }  = useParams<any>(); 

  // useEffect(() => {
  //   console.log(`>>>> : ${page}`);
  // },[]);

  useEffect(() => {
    (async function () {
      if (token) {
        await dispatch(loginByTokenThunk());
        setLoaded(true)
      } else {
        setLoaded(true);
      }
    })();
  }, [isLoaded]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Router>
      <Header />
      <div>
        {isLoaded
          ? <Switch>
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
            <Route path="/login">
              {user ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route path="/" component={Home} />
          </Switch>
          : <UserLoadingPage />
        }
        <ToastContainer />
      </div>
    </Router>
  );
}


