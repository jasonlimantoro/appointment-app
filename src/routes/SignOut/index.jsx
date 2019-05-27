import React from 'react';
import { Router } from '@reach/router';
import SignOut from './SignOut';
import Feedback from '../Feedback';
// TODO: Uncomment when decided to use props
// import PropTypes from 'prop-types';

const Index = () => {
  return (
    <Router>
      <SignOut path="/" />
      <Feedback path="feedback" message="{User} is successfully signed out" />
    </Router>
  );
};

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
