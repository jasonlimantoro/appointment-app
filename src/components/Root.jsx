import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import PropTypes from 'prop-types';
import configureStore from '../store';
import { client } from '../config';
import App from './App';

const defaultStore = configureStore();

const Root = ({ store }) => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  );
};

Root.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object,
};

Root.defaultProps = {
  store: defaultStore,
};

export default Root;
