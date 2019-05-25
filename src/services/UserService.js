import BaseService from './BaseService';

export default class UserService extends BaseService {
  login = async ({ username, password }) =>
    this._util.request('/users/login', 'post', {
      body: { username, password },
    });
}
