import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import App from './components/App';
import routes from './routes';
import './styles/styles.css';  // webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider><App /></Provider>,
     document.getElementById('app'));
