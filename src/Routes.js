import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Feedback from './pages/Feedback';
import Game from './pages/Game';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/game" component={ Game } />
        <Route exact path="/feedback" component={ Feedback } />
        <Route path="/ranking" component={ Ranking } />
        <Route path="/settings" component={ Settings } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}
