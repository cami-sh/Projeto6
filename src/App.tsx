import React from 'react';
import './App.css';
import Routes from './routes'
import store from './store'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
