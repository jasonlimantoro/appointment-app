import React from 'react';
import { storiesOf } from '@storybook/react';
import classNames from 'classnames';
import Button from '.';

const TEXT = {
  short: 'Some text',
  long: 'Some text that is very long until the button is very long',
};

storiesOf('Component|Button', module).add('variants', () => {
  const themedButton = [
    { name: 'default', text: TEXT.short, containerColor: 'bg-gray-dark' },
    { name: 'primary', text: TEXT.short, containerColor: 'bg-gray-light' },
    {
      name: 'transparentLight',
      text: TEXT.short,
      containerColor: 'bg-blue-dark',
    },
  ];
  return (
    <div className="flex">
      {themedButton.map(b => (
        <div key={b.name} className="flex flex-col mx-3">
          <div className={classNames('p-4', b.containerColor)}>
            <Button className={b.name}>{b.text}</Button>
          </div>
          {b.name}
        </div>
      ))}
    </div>
  );
});

storiesOf('Component|Button/layouts', module)
  .add('inline', () => <Button>{TEXT.short}</Button>)
  .add('full width', () => (
    <div className="w-1/2 border-2 border-red-800">
      Parent container
      <Button fullWidth>{TEXT.short}</Button>
    </div>
  ));

storiesOf('Component|Button/others', module).add('disable ripple', () => (
  <Button ripple={false}>{TEXT.short}</Button>
));
