import { combineReducers } from 'redux';
import users, * as fromUserReducer from './users.reducer';

export default combineReducers({
  users,
});

export const selectors = {
  users: {
    selectIsAuthenticated: state =>
      fromUserReducer.selectIsAuthenticated(state.users),
  },
};
