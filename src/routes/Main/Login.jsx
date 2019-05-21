import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import banner from '../../images/america-analysis-cellphone.png';

const Login = () => {
  return (
    <div className="flex h-full">
      <div
        className="flex-1 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      />
      <div className="flex-1 p-4 flex flex-col items-center justify-center">
        <div className="w-1/2">
          <h1>
            <span className="font-bold">Log</span> in
          </h1>
          <form action="#" className="mt-40 mb-40">
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
            <Button fullWidth>Submit</Button>
          </form>
          <p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Don't have an account? <span className="font-bold">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
