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
  login: success
    ? jest.fn().mockResolvedValue({ token: user.token })
    : jest.fn().mockRejectedValue(err),
  logout: success
    ? jest.fn().mockResolvedValue({})
    : jest.fn().mockRejectedValue(err),
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
    const service = mockServiceCreator();
    it('should dispatch a login begin action when login succeeds', async () => {
      await store.dispatch(
        userActions.loginUser(
          { username: user.username, password: user.password },
          service,
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
      expect(service.login).toHaveBeenCalledWith({
        username: user.username,
        password: user.password,
      });
    });
    it('should dispatch a login begin action when login fails', async () => {
      const service = mockServiceCreator(false);
      try {
        await store.dispatch(
          userActions.loginUser(
            { username: user.username, password: user.password },
            service,
          ),
        );
      } catch (e) {
        expect(e.message).toEqual('Unknown Error');
      }
      const expectedActions = [
        { type: userActions.actions.LOGIN_BEGIN },
        {
          type: userActions.actions.LOGIN_FAILURE,
          payload: Error('Unknown Error'),
        },
      ];
      const actual = store.getActions();
      expect(actual).toEqual(expectedActions);
      expect(service.login).toHaveBeenCalledWith({
        username: user.username,
        password: user.password,
      });
    });
  });
  describe('Logout', () => {
    it('should throw error when not logged in', async () => {
      const service = mockServiceCreator();
      try {
        await store.dispatch(userActions.logoutUser(mockServiceCreator()));
      } catch (e) {
        expect(e.message).toEqual('Not signed in');
      }
      expect(service.logout).not.toHaveBeenCalled();
    });
    describe('Logged In First', () => {
      beforeEach(() => {
        userActions.saveUser({ user });
      });
      afterEach(() => {
        userActions.flushUser();
      });
      it('should dispatch a logout begin action when logout succeeds', async () => {
        const service = mockServiceCreator();
        await store.dispatch(userActions.logoutUser(service));
        const expectedActions = [
          { type: userActions.actions.LOGOUT_BEGIN },
          { type: userActions.actions.LOGOUT_SUCCESS },
        ];
        const actual = store.getActions();
        expect(actual).toEqual(expectedActions);
        expect(service.logout).toHaveBeenCalledWith({ token: user.token });
      });

      it('should dispatch a logout begin action when logout fails', async () => {
        const service = mockServiceCreator(false);
        await store.dispatch(userActions.logoutUser(service));
        const expectedActions = [
          { type: userActions.actions.LOGOUT_BEGIN },
          {
            type: userActions.actions.LOGOUT_FAILURE,
            payload: Error('Unknown Error'),
          },
        ];
        const actual = store.getActions();
        expect(actual).toEqual(expectedActions);
        expect(service.logout).toHaveBeenCalledWith({
          token: user.token,
        });
      });
    });
  });
});
