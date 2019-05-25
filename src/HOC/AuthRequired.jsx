import React, { useEffect } from 'react';
import { navigate } from '@reach/router';
import { getUser } from '../actions/users.action';

const AuthRequired = Component => ({ ...props }) => {
  useEffect(() => {
    const user = getUser();
    if (!user) {
      navigate('/login');
    }
  }, []);
  return <Component {...props} />;
};

export default AuthRequired;
