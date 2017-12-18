import React from 'react';
import Header from './Header';
import Search from './Search';
import Callback from './Callback';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from '../utils/AuthService';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
        	<Route path="/" component={Header, Search} />
        	<Route path="/callback" component={Callback} />
        </Router>
      </div>
    );
  }
}