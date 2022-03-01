import React from 'react';

import logo from './EGLogo.png';
import Home from './home/Home';
import Task1 from './task1/Task1';
import Task2 from './task2/Task2';
import { Switch, Route } from 'react-router';
import './App.sass';

const App = () => (
  <div className='App'>
    <div className='App-header text-center'>
      <img src={logo} className='App-logo' alt='logo' />
      <h2>Web Engineer Test</h2>
    </div>
    <div className='app-container'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/task-1' component={Task1} />
        <Route exact path='/task-2' component={Task2} />
      </Switch>
    </div>
  </div>
);

export default App;
