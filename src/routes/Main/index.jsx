import React from 'react';
// TODO: Uncomment when decided to use props
// import PropTypes from 'prop-types';
import { Router, Link } from '@reach/router';
import Home from './Home';
import Login from './Login';
import SignIn from './SignIn';
import SignOut from './SignOut';

const Index = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {' |'}
        <Link to="login">Login</Link>
        {' |'}
        <Link to="sign-in">Sign in Guest</Link>
        {' |'}
        <Link to="sign-out">Sign out Guest</Link>
        {' |'}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Router>
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
