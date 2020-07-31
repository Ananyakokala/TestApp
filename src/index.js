import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from "./store/configureStore"
import Navigation from "./component/Navigation"
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker'; 

render(
  <Provider store={store}>
    <Router>
    <Navigation/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

console.log("Reduxxx" + store)

serviceWorker.register();


