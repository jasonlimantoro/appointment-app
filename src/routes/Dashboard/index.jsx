import React from 'react';
import { Link, Router } from '@reach/router';
// import PropTypes from 'prop-types';
import SignedInGuest from './SignedInGuest';
import SignedOutGuest from './SignedOutGuest';
import Settings from './Settings';
import Reports from './Reports';
import Overview from './Overview';

const Index = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {' |'}
        <Link to="signed-in">Signed In Guest</Link>
        {' |'}
        <Link to="signed-out">Signed Out Guest</Link>
        {' |'}
        <Link to="reports">Reports</Link>
        {' |'}
        <Link to="settings">Settings</Link>
      </nav>
      <Router>
        <Overview path="/" />
        <SignedInGuest path="/signed-in" />
        <SignedOutGuest path="/signed-out" />
        <Settings path="/settings" />
        <Reports path="/reports" />
      </Router>
    </div>
  );
};

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
