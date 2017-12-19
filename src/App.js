import React from 'react';
import Header from './Header';
import Search from './Search';
import Callback from './Callback';
import { Router, Route, HashRouter } from 'react-router-dom';
import { requireAuth } from './utils/AuthService';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
      		<HashRouter>
      			<div>
        		<Route path="/" component={Header, Search} />
        		<Route path="/callback" component={Callback} />
      			</div>
      		</HashRouter>
      </div>
    );
  }
}