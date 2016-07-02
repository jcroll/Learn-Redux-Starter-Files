import React from 'react';

import ReactDOM from 'react-dom';

import css from './styles/style.styl';

import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));