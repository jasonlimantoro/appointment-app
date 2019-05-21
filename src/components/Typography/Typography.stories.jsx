import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '.';

storiesOf('Component|Typography/h1', module)
  .add('default', () => <Typography component="h1">Hello world</Typography>)
  .add('shorthand', () => <Typography.Title>Hello world</Typography.Title>);

storiesOf('Component|Typography/h2', module)
  .add('default', () => <Typography component="h2">Hello World</Typography>)
  .add('shorthand', () => (
    <Typography.Subtitle>Hello World</Typography.Subtitle>
  ));

storiesOf('Component|Typography/h3', module).add('default', () => (
  <Typography component="h3">Hello World</Typography>
));

storiesOf('Component|Typography/h4', module).add('default', () => (
  <Typography component="h4">Hello World</Typography>
));

storiesOf('Component|Typography/h5', module).add('default', () => (
  <Typography component="h5">Hello World</Typography>
));

storiesOf('Component|Typography/h6', module).add('default', () => (
  <Typography component="h6">Hello World</Typography>
));

storiesOf('Component|Typography/p', module)
  .add('default', () => <Typography component="p">Hello World</Typography>)
  .add('shorthand', () => (
    <Typography.Paragraph>Hello World</Typography.Paragraph>
  ));

storiesOf('Component|Typography/common', module)
  .add('inline', () => (
    <div className="w-1/2 border-red-500 border-2">
      <Typography.Title inline className="border-2 border-blue-500">
        Hello world
      </Typography.Title>{' '}
      <Typography.Subtitle inline className="border-2 border-blue-500">
        This is my world
      </Typography.Subtitle>
    </div>
  ))
  .add('block', () => (
    <div className="w-1/2 border-red-500 border-2">
      <Typography.Title className="border-2 border-blue-500">
        Hello world
      </Typography.Title>
    </div>
  ));
