import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '.';

storiesOf('Component|Card/default', module)
  .add('inline', () => <Card>Some Text</Card>)
  .add('full width', () => (
    <div className="border-2 border-red-500">
      Parent Element <Card fullWidth>Some Text</Card>
    </div>
  ));

storiesOf('Component|Card/primary', module)
  .add('inline', () => <Card variant="primary">Some Text</Card>)
  .add('full width', () => (
    <div className="border-2 border-red-500">
      Parent Element{' '}
      <Card variant="primary" fullWidth>
        Some Text
      </Card>
    </div>
  ));
