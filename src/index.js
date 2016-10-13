import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/App';
import ThemeProvider from './components/ThemeProvider';
import './index.css';

const theme = {
  table: {
    width: '100%',
    textAlign: 'left',
    boxShadow: '0 2px 6px -2px'
  },
  tableHead: {
    backgroundColor: '#444',
    color: '#eee'
  },
  tableCell: {
    padding: '0.5em 1em'
  }
};

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
