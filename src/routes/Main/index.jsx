import React from 'react';
import { Router } from '@reach/router';
import Home from './Home';
import Login from './Login';
import SignIn from './SignIn';
import SignOut from './SignOut';
import { AuthRequired } from '../../HOC';

const AuthHome = AuthRequired(Home);
const AuthSignIn = AuthRequired(SignIn);
const AuthSignOut = AuthRequired(SignOut);

const Index = () => {
  return (
    <Router className="h-full">
      <Login path="/login" />
      <AuthHome path="/" />
      <AuthSignIn path="/sign-in/*" />
      <AuthSignOut path="/sign-out/*" />
    </Router>
  );
};

export default Index;
