import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Root from './components/Root';

/* eslint-disable no-console */
if (process.env.DEBUG) {
  console.log(`Build stage: ${process.env.NODE_ENV}`);
  console.log(`App stage: ${process.env.APP_STAGE}`);
}
ReactDOM.render(<Root />, document.getElementById('app'));
