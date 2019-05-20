import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import '../src/index.scss';
const req = require.context('../src/components', true, /\.stories\.js$/);

addDecorator(withInfo);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
