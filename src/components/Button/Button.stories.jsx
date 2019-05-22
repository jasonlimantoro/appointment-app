import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

const TEXT = {
  short: 'Some text',
  long: 'Some text that is very long until the button is very long',
};

storiesOf('Component|Button/default', module)
  .add('basic', () => <Button ripple={false}>{TEXT.short}</Button>)
  .add('ripple', () => <Button>{TEXT.short}</Button>)
  .add('full width', () => (
    <div className="w-1/2 border-2 border-red-800">
      Parent container
      <Button fullWidth>{TEXT.short}</Button>
    </div>
  ));

storiesOf('Component|Button/primary', module)
  .add('basic', () => (
    <Button variant="primary" ripple={false}>
      {TEXT.short}
    </Button>
  ))
  .add('ripple', () => <Button variant="primary">{TEXT.short}</Button>)
  .add('full width', () => (
    <div className="w-1/2 border-2 border-red-800">
      Parent container
      <Button variant="primary" fullWidth>
        {TEXT.short}
      </Button>
    </div>
  ));
