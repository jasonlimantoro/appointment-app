import { combineReducers } from 'redux';
import users, * as fromUserReducer from './users.reducer';
import guests, * as fromGuestReducer from './guests.reducer';

export default combineReducers({
  users,
  guests,
});

export const selectors = {
  users: {
    selectIsAuthenticated: state =>
      fromUserReducer.selectIsAuthenticated(state.users),
  },
  guests: {
    selectData: state => fromGuestReducer.selectData(state.guests),
  },
};
