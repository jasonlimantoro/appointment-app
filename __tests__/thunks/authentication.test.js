import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as userActions from '../../src/actions/users.action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const user = {
  username: 'John Doe',
  password: 'abcd',
  token: 'random',
};

const mockServiceCreator = (success = true, err = Error('Unknown Error')) => ({
  login: () =>
    new Promise((resolve, reject) => {
      return success ? resolve({ token: user.token }) : reject(err);
    }),
  logout: () =>
    new Promise((resolve, reject) => {
      return success ? resolve({ result: true }) : reject(err);
    }),
});

describe('Authentication', () => {
  let store;
  beforeEach(() => {
    store = mockStore();
  });
  afterEach(() => {
    userActions.flushUser();
  });
  describe('Login', () => {
    it('should dispatch a login begin action when login succeeds', async () => {
      await store.dispatch(
        userActions.loginUser(
          { username: user.username, password: user.password },
          mockServiceCreator(),
        ),
      );
      const expectedActions = [
        { type: userActions.actions.LOGIN_BEGIN },
        {
          type: userActions.actions.LOGIN_SUCCESS,
          payload: {
            username: user.username,
            token: user.token,
          },
        },
      ];
      const actual = store.getActions();
      expect(actual).toEqual(expectedActions);
    });
    it('should dispatch a login begin action when login fails', async () => {
      try {
        await store.dispatch(
          userActions.loginUser(
            { username: user.username, password: user.password },
            mockServiceCreator(false),
          ),
        );
      } catch (e) {
        expect(e.message).toEqual('Unknown Error');
      }
      const expectedActions = [
        { type: userActions.actions.LOGIN_BEGIN },
        { type: userActions.actions.LOGIN_FAILURE, payload: 'Unknown Error' },
      ];
      const actual = store.getActions();
      expect(actual).toEqual(expectedActions);
    });
  });
  describe('Logout', () => {
    it('should throw error when not logged in', async () => {
      try {
        await store.dispatch(userActions.logoutUser(mockServiceCreator()));
      } catch (e) {
        expect(e.message).toEqual('Not signed in');
      }
    });
    describe('Logged In First', () => {
      beforeEach(() => {
        userActions.saveUser({ user });
      });
      afterEach(() => {
        userActions.flushUser();
      });
      it('should dispatch a logout begin action when logout succeeds', async () => {
        await store.dispatch(userActions.logoutUser(mockServiceCreator()));
        const expectedActions = [
          { type: userActions.actions.LOGOUT_BEGIN },
          { type: userActions.actions.LOGOUT_SUCCESS },
        ];
        const actual = store.getActions();
        expect(actual).toEqual(expectedActions);
      });

      it('should dispatch a logout begin action when logout fails', async () => {
        await store.dispatch(userActions.logoutUser(mockServiceCreator(false)));
        const expectedActions = [
          { type: userActions.actions.LOGOUT_BEGIN },
          {
            type: userActions.actions.LOGOUT_FAILURE,
            payload: 'Unknown Error',
          },
        ];
        const actual = store.getActions();
        expect(actual).toEqual(expectedActions);
      });
    });
  });
});
