import { getNestedObjectValue } from '../../components/utils/helpers';

class AmazonUtilService {
  getJWT = response =>
    getNestedObjectValue(response)([
      'signInUserSession',
      'idToken',
      'jwtToken',
    ]);
}

export default AmazonUtilService;
