import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import IndexPage from './index/index';
import Home from './pages/home/index';

require('./App.css');

//setState调用时新的state和之前的state合并生成一个新的对象 再去覆盖之前的state对象

export default class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={IndexPage}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    )
  }
}