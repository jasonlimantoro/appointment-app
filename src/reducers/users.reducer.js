import { actions, getUser } from '../actions/users.action';

export const initialState = {
  user: {},
  isAuthenticated: false,
  loginAttempt: 0,
  isLoggingIn: false,
  isLoggingOut: false,
  error: {},
};

const computeDerivedState = () => {
  let derivedState = initialState;
  const persistedState = getUser();
  if (persistedState) {
    derivedState = persistedState;
  }
  return derivedState;
};

export default (state = computeDerivedState(), action) => {
  switch (action.type) {
    case actions.LOGIN_BEGIN:
      return {
        ...state,
        isLoggingIn: true,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoggingIn: false,
        loginAttempt: initialState.loginAttempt,
        error: initialState.error,
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        loginAttempt: state.loginAttempt + 1,
        error: action.payload,
      };
    case actions.LOGOUT_BEGIN:
      return {
        ...state,
        isLoggingOut: true,
      };

    case actions.LOGOUT_SUCCESS:
      return {
        ...initialState,
      };
    case actions.LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectIsAuthenticated = state => state.isAuthenticated;
