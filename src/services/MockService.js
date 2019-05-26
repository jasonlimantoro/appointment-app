import UtilService from './UtilService';

const mockUser = {
  username: 'John Doe',
  password: 'asdf',
  token: 'asdfghjkl',
};

export default class MockService extends UtilService {
  // eslint-disable-next-line consistent-return,class-methods-use-this
  async request(path, method = 'GET', options = {}) {
    switch (true) {
      case path.includes('/users/login'): {
        if (method.toUpperCase() === 'POST') {
          const {
            body: { username, password },
          } = options;
          if (
            username === mockUser.username &&
            password === mockUser.password
          ) {
            return {
              result: true,
              token: mockUser.token,
            };
          }
          throw Error('Username / password combination is not valid!');
        }
        throw Error('SERVER_ERROR');
      }
      case path.includes('/users/logout'):
        if (method.toUpperCase() === 'POST') {
          const {
            headers: { authorization },
          } = options;
          const token = authorization.split(' ')[1];
          if (token === mockUser.token) {
            return {
              result: true,
            };
          }
          throw Error('Credentials is not valid to sign out');
        }
        throw Error('SERVER_ERROR');
      default:
        break;
    }
  }
}
