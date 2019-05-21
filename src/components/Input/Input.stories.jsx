import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '.';

storiesOf('Component|Input/text', module)
  .add('default', () => (
    <Input label="username" inputProps={{ placeholder: 'Enter username' }} />
  ))
  .add('optional', () => (
    <Input
      label="username"
      inputProps={{ placeholder: 'Enter username' }}
      required={false}
    />
  ))
  .add('with errors', () => (
    <Input
      label="username"
      inputProps={{
        placeholder: 'Enter username',
      }}
      error="Username is taken"
    />
  ));
