import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './i18n';

import Navigation from './components/navigation/navigation';
import Todo from './components/todo/todo';
import Archive from './components/archive/archive';
import LangChange from './components/lang-change/lang-change';

ReactDOM.render(
  <BrowserRouter>
    <Navigation />
    <LangChange />
    <Switch>
      <Route exact path="/" render={() => <Todo />} />
      <Route path="/archive" render={() => <Archive />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
