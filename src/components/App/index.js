import React, { PropTypes, Component } from 'react';

import Table from '../../containers/Table';
import { requestCharacters } from '../../actions/characters';

import logo from './logo.svg';
import './index.css';

export default class App extends Component {
  static contextTypes = {
    theme: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Table
            fetchAction={() => requestCharacters()}
            sortAction={() => {}}
          >
            <th style={this.context.theme.tableCell}>First Name</th>
            <th style={this.context.theme.tableCell}>Last Name</th>
            <th style={this.context.theme.tableCell}>Gender</th>
            <th style={this.context.theme.tableCell}>Is Alive</th>
          </Table>
        </div>
      </div>
    );
  }
}
