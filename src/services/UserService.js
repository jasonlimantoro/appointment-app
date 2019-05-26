import BaseService from './BaseService';

export default class UserService extends BaseService {
  login = async ({ username, password }) =>
    this._util.request('/users/login', 'post', {
      body: { username, password },
    });

  logout = async ({ token }) =>
    this._util.request('/users/logout', 'post', {
      headers: { authorization: `Basic ${token}` },
    });
}
