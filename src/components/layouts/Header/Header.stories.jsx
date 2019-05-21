import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '.';

storiesOf('Layout|Header', module).add('with title', () => (
  <Header title="Company name" />
));
