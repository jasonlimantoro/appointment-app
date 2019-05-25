import UtilService from './UtilService';

const mockUser = {
  username: 'John Doe',
  password: 'asdf',
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
            };
          }
          throw Error('Username / password combination is not valid!');
        }
        throw Error('SERVER_ERROR');
      }
      default:
        break;
    }
  }
}
