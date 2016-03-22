/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from './pages/Layout';
import Photo from './pages/Photo';
import Blog from './pages/Blog';
import Profile from './pages/Profile';


const app = document.getElementById('app');

const App = (
  <Router history={hashHistory}>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ Photo } />
      <Route path="/blog" component={ Blog } />
      <Route path="/profile" component={ Profile } />
    </Route>
  </Router>
);

ReactDOM.render(App, app);
