import { actions, getUser } from '../actions/users.action';

const initialState = () => {
  let initialState = {
    username: '',
    isAuthenticated: false,
    loginAttempt: 0,
    isAttempting: false,
    error: {},
  };
  const { username } = getUser();
  if (username) {
    initialState = {
      ...initialState,
      isAuthenticated: true,
      username,
    };
  }
  return initialState;
};

export default (state = initialState(), action) => {
  switch (action.type) {
    case actions.LOGIN_BEGIN:
      return {
        ...state,
        isAttempting: true,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        isAuthenticated: true,
        isAttempting: false,
        loginAttempt: initialState.loginAttempt,
        error: initialState.error,
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        isAttempting: false,
        loginAttempt: state.loginAttempt + 1,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectIsAuthenticated = state => state.isAuthenticated;
