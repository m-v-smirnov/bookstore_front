import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks';
import { PrivateRoute } from './components/PrivateRoutes';
import { UserLoadingPage } from './components/UserLoadingPage';
import { useEffect, useState } from 'react';
import { loginByTokenThunk } from './store/users/userActions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookCard } from './components/BookCard/BookCard';
import { BookShopCart } from './components/BookShopCart/BookShopCart';
import { S3LogRequestForm } from './components/awsS3/S3LogRequestForm';


const ToBookCard = () => {
  const { id } = useParams<{id : string}>();
  return <BookCard bookId={id} />
};

export default function App() {
  
  const dispatch: any = useAppDispatch();
  const { error } = useAppSelector((state) => state.user);
  const [isLoaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    (async function () {
      if (token) {
        await dispatch(loginByTokenThunk());
        setLoaded(true)
      } else {
        setLoaded(true);
      }
    })();
  }, [dispatch]);
  
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
            <PrivateRoute path="/shopcart">
              <BookShopCart />
            </PrivateRoute>
            <Route path="/aws/get-logs" component={S3LogRequestForm} />
            <Route path="/login" component={Login} />
            <Route path="/book/:id" component={ToBookCard} />
            <Route path="/" component={Home} />
          </Switch>
          : <UserLoadingPage />
        }
        <ToastContainer />
      </div>
    </Router>
  );
}


