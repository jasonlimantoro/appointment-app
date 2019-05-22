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
              inputClassName="lg:h-16 lg:text-lg"
              fullWidth
            />
            <Input
              id="email"
              type="email"
              label="Email"
              inputProps={{ placeholder: 'Enter email', type: 'email' }}
              placeholder="Enter Email"
              inputClassName="lg:h-16 lg:text-lg"
              fullWidth
            />
            <Button fullWidth>Log In</Button>
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
