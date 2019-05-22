import React from 'react';
import { Input, Button, Master } from '../../components';

const SignIn = () => {
  return (
    <Master
      title="Enter Guest details to sign in"
      layoutProps={{ headerProps: { title: 'Company Name' } }}
    >
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
    </Master>
  );
};

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
