import { actions } from '../actions/guests.action';

export const initialState = {
  guests: [],
  isFetching: false,
  fetched: false,
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_GUEST_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case actions.FETCH_GUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        guests: action.payload,
      };
    case actions.FETCH_GUEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case actions.RESET_GUEST:
      return initialState;
    default:
      return state;
  }
};
