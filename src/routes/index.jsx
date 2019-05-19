import React from 'react';
import { Router } from '@reach/router';
import Dashboard from './Dashboard';
import Main from './Main';

export default () => (
  <Router>
    <Main path="/*" />
    <Dashboard path="/dashboard/*" />
  </Router>
);
