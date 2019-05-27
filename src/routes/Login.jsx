import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import AWS from '../services/aws';

import { selectors } from '../reducers/rootReducer';
import { Input, Button, Typography } from '../components';
import { useForm } from '../hooks';
import { loginUser } from '../actions/users.action';
import { transformErrorToString } from '../components/utils/helpers';
import banner from '../images/business.png';

const Login = ({ loginUser, isAuthenticated }) => {
  const {
    getFieldProps,
    handleSubmit,
    errors,
    touched,
    submissionError,
  } = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async values => {
      await loginUser(values, AWS);
    },
    validate: values => {
      const formErrors = {};
      switch (true) {
        case values.username === '':
          formErrors.username = 'Username is required';
          break;
        default:
          break;
      }
      switch (true) {
        case values.password === '':
          formErrors.password = 'Password is required';
          break;
        case values.password.length < 4:
          formErrors.password = 'Password length is less than 4';
          break;
        default:
          break;
      }
      return formErrors;
    },
    delay: 1000,
  });
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, []);
  return (
    <div className="flex h-full">
      <picture
        className="flex-1 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      />
      <div className="flex-1 p-4 flex flex-col items-center justify-center">
        <div className="w-1/2">
          <Typography.Title inline className="font-bold">
            Log
          </Typography.Title>{' '}
          <Typography.Title inline>In</Typography.Title>
          <form onSubmit={handleSubmit} className="mt-20 mb-20">
            {submissionError && (
              <Typography component="h4" className="text-red-500 mb-4">
                {transformErrorToString(submissionError)}
              </Typography>
            )}
            <Input
              label="Username"
              inputProps={{
                name: 'username',
                placeholder: 'Enter username',
                ...getFieldProps('username'),
              }}
              error={touched.username && errors.username}
              fullWidth
            />
            <Input
              label="Password"
              inputProps={{
                name: 'password',
                placeholder: 'Enter password',
                type: 'password',
                ...getFieldProps('password'),
              }}
              error={touched.password && errors.password}
              fullWidth
            />
            <Button variant="primary" fullWidth>
              Log In
            </Button>
          </form>
          <Typography.Paragraph>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Don't have an account?{' '}
            <Typography className="font-bold">Sign up</Typography>
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  // redux actions
  loginUser: PropTypes.func.isRequired,

  // redux state
  isAuthenticated: PropTypes.bool,
};

export default compose(
  connect(
    state => {
      return {
        isAuthenticated: selectors.users.selectIsAuthenticated(state),
      };
    },
    { loginUser },
  ),
)(Login);
