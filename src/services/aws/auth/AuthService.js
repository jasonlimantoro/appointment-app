import { Auth } from 'aws-amplify';
import BaseService from '../../BaseService';

export default class AWS extends BaseService {
  login = async ({ username, password }) => {
    try {
      const res = await Auth.signIn(username, password);
      const jwt = this._util.getJWT(res);
      return {
        token: jwt,
      };
    } catch (e) {
      throw e;
    }
  };

  logout = async () => {
    try {
      await Auth.signOut();
    } catch (e) {
      throw e;
    }
  };
}
