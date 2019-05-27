import React from 'react';
import { Router } from '@reach/router';
import Dashboard from './Dashboard';
import Login from './Login';
import Scratch from '../components/utils/Scratch';
import { AuthRequired } from '../HOC';
import Home from './Home';
import SignIn from './SignIn';
import SignOut from './SignOut';

const AuthHome = AuthRequired(Home);
const AuthSignIn = AuthRequired(SignIn);
const AuthSignOut = AuthRequired(SignOut);

export default () => (
  <Router className="h-full">
    <Login path="/login" />
    <AuthHome path="/" />
    <AuthSignIn path="/sign-in/*" />
    <AuthSignOut path="/sign-out/*" />
    <Dashboard path="/dashboard/*" />
    <Scratch default />
  </Router>
);
