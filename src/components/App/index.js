import React, { Component } from 'react';

import Repos from '../Repos';
import logo from './logo.svg';
import './index.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <div className='App-intro'>
          <Repos username='josephspens' />
        </div>
      </div>
    );
  }
}
