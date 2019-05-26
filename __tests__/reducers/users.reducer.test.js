import userReducer, {
  initialState,
  selectIsAuthenticated,
} from '../../src/reducers/users.reducer';
import { actions } from '../../src/actions/users.action';
import { save, flush } from '../../src/components/utils/localStorage';

const user = {
  username: 'Jane Doe',
  token: 'qwerty',
};

describe('User reducer', () => {
  it('should return the initial state', () => {
    const actual = userReducer(undefined, { type: undefined });
    expect(actual).toEqual(initialState);
  });
  it('should return the persisted state', () => {
    const persistedState = {
      ...initialState,
      user,
      isAuthenticated: true,
    };
    const before = userReducer(undefined, { type: undefined });
    expect(before).toEqual(initialState);

    save('auth', persistedState);

    const after = userReducer(undefined, { type: undefined });
    expect(after).toEqual(persistedState);

    flush('auth');
  });
  describe('Selectors', () => {
    it('should select isAuthenticated field', () => {
      const beforeLogin = userReducer(undefined, { type: undefined });
      const fieldBeforeLogin = selectIsAuthenticated(beforeLogin);
      expect(fieldBeforeLogin).toEqual(false);

      const afterLogin = userReducer(undefined, {
        type: actions.LOGIN_SUCCESS,
        payload: user,
      });
      const fieldAfterlogin = selectIsAuthenticated(afterLogin);
      expect(fieldAfterlogin).toEqual(true);
    });
  });
  describe('Login', () => {
    it('should begin login', () => {
      const actual = userReducer(undefined, { type: actions.LOGIN_BEGIN });
      expect(actual).toEqual({
        ...initialState,
        isLoggingIn: true,
      });
    });
    it('should successfully login', () => {
      const actual = userReducer(undefined, {
        type: actions.LOGIN_SUCCESS,
        payload: user,
      });
      expect(actual).toEqual({
        ...initialState,
        user,
        isAuthenticated: true,
        isLoggingIn: false,
      });
    });

    it('should fails login', () => {
      const error = {
        message: 'Not valid!',
      };
      const actual = userReducer(undefined, {
        type: actions.LOGIN_FAILURE,
        payload: error,
      });

      expect(actual).toEqual({
        ...initialState,
        error,
        loginAttempt: 1,
      });
    });
  });
  describe('Logout', () => {
    it('should begin logout', () => {
      const actual = userReducer(undefined, { type: actions.LOGOUT_BEGIN });
      expect(actual).toEqual({
        ...initialState,
        isLoggingOut: true,
      });
    });
    it('should successfully logout', () => {
      const actual = userReducer(undefined, { type: actions.LOGOUT_SUCCESS });
      expect(actual).toEqual(initialState);
    });
    it('should fails logout', () => {
      const error = {
        message: 'Fails to logout',
      };
      const actual = userReducer(undefined, {
        type: actions.LOGOUT_FAILURE,
        payload: error,
      });
      expect(actual).toEqual({
        ...initialState,
        error,
        isLoggingOut: false,
      });
    });
  });
});
