import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import { store } from './store';
import Test from './components/test';


function App() {
  return (
    <Provider store={store}>
      <div><Test /></div>
    </Provider>
  );
}

export default App;
