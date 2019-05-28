import { navigate } from '@reach/router';

import UserService from '../services/UserService';
import MockService from '../services/MockService';
import * as storage from '../components/utils/localStorage';

export const actions = {
  LOGIN_BEGIN: 'LOGIN_BEGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT_BEGIN: 'LOGOUT_BEGIN',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',
};

const defaultService = new UserService({
  baseUrl: '/',
  ServiceUtil: MockService,
});

export const getUser = (key = 'auth') => {
  return storage.get(key);
};

export const saveUser = (user, key = 'auth') => {
  if (!getUser(key)) {
    storage.save(key, user);
  }
};

export const flushUser = (key = 'auth') => {
  return storage.flush(key);
};

export const loginUser = (
  { username, password },
  service = defaultService,
) => async (dispatch, getState) => {
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
    dispatch({ type: actions.LOGIN_FAILURE, payload: e });
    throw e;
  }
};

export const logoutUser = (service = defaultService) => async dispatch => {
  const user = getUser();
  if (!user) {
    throw Error('Not signed in');
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
    dispatch({ type: actions.LOGOUT_FAILURE, payload: e });
  }
};
