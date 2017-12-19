import React from 'react';
import Search from './Search';
import Callback from './Callback';
import { Route, HashRouter } from 'react-router-dom';
import { requireAuth } from './utils/AuthService';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
      		<HashRouter>
      			<div>
        		<Route path="/" component={Search} />
        		<Route path="/callback" component={Callback} />
      			</div>
      		</HashRouter>
      </div>
    );
  }
}