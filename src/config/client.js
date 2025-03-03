import AWSAppSyncClient from 'aws-appsync';
import Amplify, { Auth } from 'aws-amplify';
import config from '../aws-exports';

const client = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    type: config.aws_appsync_authenticationType,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
});

Amplify.configure(config);

export default client;
