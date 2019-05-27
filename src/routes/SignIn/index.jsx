import React from 'react';
import { Router } from '@reach/router';
import SignInForm from './SignIn';
import Feedback from '../Feedback';
// TODO: Uncomment when decided to use props
// import PropTypes from 'prop-types';

const Index = () => {
  return (
    <Router>
      <SignInForm path="/" />
      <Feedback path="/feedback" message="{User} is successfully signed in" />
    </Router>
  );
};

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
