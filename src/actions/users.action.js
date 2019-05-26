import { navigate } from '@reach/router';

import UserService from '../services/UserService';
import MockService from '../services/MockService';
import { get, save, flush } from '../components/utils/localStorage';

export const actions = {
  LOGIN_BEGIN: 'LOGIN_BEGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT_BEGIN: 'LOGOUT_BEGIN',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',
};

const service = new UserService({
  baseUrl: '/',
  ServiceUtil: MockService,
});

export const getUser = (key = 'auth') => {
  const user = get(key);
  if (user) {
    return user;
  }
  return undefined;
};

const saveUser = (user, key = 'auth') => {
  if (!getUser(key)) {
    save(key, user);
  }
};

const flushUser = (key = 'auth') => {
  return flush(key);
};

export const loginUser = ({ username, password }) => async (
  dispatch,
  getState,
) => {
  dispatch({ type: actions.LOGIN_BEGIN });
  try {
    const { token } = await service.login({ username, password });
    await dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: { username, token },
    });
    saveUser(getState().users);
    navigate('/');
  } catch (e) {
    dispatch({ type: actions.LOGIN_FAILURE, payload: e.message });
    throw e;
  }
};

export const logoutUser = () => async dispatch => {
  const user = getUser();
  if (!user) {
    throw Error('Not signed in!');
  }
  dispatch({
    type: actions.LOGOUT_BEGIN,
  });
  try {
    const {
      user: { token },
    } = user;
    await service.logout({ token });
    flushUser();
    navigate('/login');
    dispatch({
      type: actions.LOGOUT_SUCCESS,
    });
  } catch (e) {
    dispatch({ type: actions.LOGOUT_FAILURE, payload: e.message });
  }
};
