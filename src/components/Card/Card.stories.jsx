import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '.';

const TEXT = {
  short: 'Some text',
  long: 'Some longer text inside a component',
};

storiesOf('Component|Card', module).add('variants', () => {
  const themedButton = [
    { name: 'default', text: TEXT.short },
    { name: 'primary', text: TEXT.short },
  ];
  return (
    <div className="flex">
      {themedButton.map(b => (
        <div key={b.name} className="flex flex-col mx-3">
          <Card className={b.name}>{b.text}</Card>
          {b.name}
        </div>
      ))}
    </div>
  );
});
storiesOf('Component|Card/layouts', module)
  .add('inline', () => <Card>{TEXT.short}</Card>)
  .add('full width', () => (
    <div className="border-2 border-red-500">
      Parent Element <Card fullWidth>{TEXT.short}</Card>
    </div>
  ));
