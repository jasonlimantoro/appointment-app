import React from 'react';
import { Master } from '../../../components/layouts';
import { Button, Input } from '../../../components';

const SignOut = () => {
  return (
    <Master
      layoutProps={{ headerProps: { title: 'Company Name' } }}
      title="Enter Guest Details to Sign Out"
    >
      <form action="#" className="flex flex-col w-1/2">
        <Input
          fullWidth
          label="Name"
          inputProps={{ placeholder: 'Enter name' }}
          className="mb-8"
        />
        <Button variant="primary">Sign Out</Button>
      </form>
    </Master>
  );
};

SignOut.propTypes = {};

SignOut.defaultProps = {};

export default SignOut;
