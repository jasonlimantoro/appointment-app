import { navigate } from '@reach/router';

import UserService from '../services/UserService';
import MockService from '../services/MockService';
import { get, save } from '../components/utils/localStorage';

export const actions = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_BEGIN: 'LOGIN_BEGIN',
  LOGIN_USER: 'LOGIN_USER',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
};

const service = new UserService({
  baseUrl: '/',
  ServiceUtil: MockService,
});

export const getUser = (key = 'user') => {
  const user = get(key);
  if (!user) {
    return null;
  }
  return user;
};

const saveUser = ({ username }, key = 'user') => {
  if (!getUser(key)) {
    save(key, { username });
  }
};
export const loginUser = ({ username, password }) => async dispatch => {
  dispatch({ type: actions.LOGIN_BEGIN });
  try {
    await service.login({ username, password });
    saveUser({ username });
    navigate('/');
    dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: { username },
    });
  } catch (e) {
    dispatch({ type: actions.LOGIN_FAILURE, payload: e.message });
    throw e;
  }
};
