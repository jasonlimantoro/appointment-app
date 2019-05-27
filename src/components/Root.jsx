import React from 'react';
import { Provider } from 'react-redux';
import AWSAppSyncClient from 'aws-appsync';
import { ApolloProvider } from 'react-apollo';
import Amplify, { Auth } from 'aws-amplify';
import PropTypes from 'prop-types';
import configureStore from '../store';
import config from '../aws-exports';
import App from './App';

Amplify.configure(config);

const client = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    type: config.aws_appsync_authenticationType,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
});

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
