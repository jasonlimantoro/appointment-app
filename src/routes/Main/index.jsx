import React from 'react';
// TODO: Uncomment when decided to use props
// import PropTypes from 'prop-types';
import { Router } from '@reach/router';
import Home from './Home';
import Login from './Login';
import SignIn from './SignIn';
import SignOut from './SignOut';

const Index = () => {
  return (
    <div className="h-full">
      <Router className="h-full">
        <Home path="/" />
        <Login path="/login" />
        <SignIn path="/sign-in" />
        <SignOut path="/sign-out" />
      </Router>
    </div>
  );
};

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
