import React from 'react';
import { Input, Button, Typography } from '../../components';
import banner from '../../images/business.png';

const Login = () => {
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
          <form action="#" className="mt-20 mb-20">
            <Input
              id="username"
              label="Username"
              inputProps={{ placeholder: 'Enter username' }}
              fullWidth
            />
            <Input
              id="password"
              type="password"
              label="Password"
              inputProps={{ placeholder: 'Enter password', type: 'password' }}
              placeholder="Enter Password"
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

export default Login;
