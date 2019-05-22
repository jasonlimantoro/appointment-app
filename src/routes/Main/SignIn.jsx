import React from 'react';
import { Typography, Header, Input, Button } from '../../components';

const SignIn = () => {
  return (
    <div className="min-h-screen">
      <Header title="Company Name" />
      <main className="min-h-main flex flex-col items-center pb-6 px-8">
        <Typography.Subtitle className="text-center">
          Enter Guest details to sign in
        </Typography.Subtitle>
        <form action="#" className="flex flex-col w-1/2">
          <section className="flex justify-center -mx-3">
            <Input
              className="px-3"
              fullWidth
              label="First Name"
              inputProps={{ placeholder: 'Enter First name' }}
            />
            <Input
              className="px-3"
              label="Last name"
              fullWidth
              required={false}
              inputProps={{ placeholder: 'Enter Last name' }}
            />
          </section>
          <Input
            label="Email"
            inputProps={{ placeholder: 'Enter email' }}
            fullWidth
          />
          <Input
            label="NIK"
            inputProps={{ placeholder: 'Enter NIK' }}
            fullWidth
          />
          <Input
            label="Company"
            inputProps={{ placeholder: 'Enter Company name' }}
            fullWidth
          />
          <Input
            label="Who to see"
            inputProps={{ placeholder: 'Enter Person name to see' }}
            fullWidth
          />
          <Button fullWidth className="mb-4" type="button">
            Take Photo
          </Button>
          <Button variant="primary" fullWidth className="mb-4">
            Sign In
          </Button>
        </form>
      </main>
    </div>
  );
};

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
