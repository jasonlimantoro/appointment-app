import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader/root';

import Routes from '../routes';

const App = () => {
  return (
    <Fragment>
      <Routes />
    </Fragment>
  );
};

export default hot(App);
