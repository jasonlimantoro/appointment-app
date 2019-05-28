import GuestService from '../services/GuestService';

export const actions = {
  FETCH_GUEST_BEGIN: 'FETCH_GUEST_BEGIN',
  FETCH_GUEST_SUCCESS: 'FETCH_GUEST_SUCCESS',
  FETCH_GUEST_FAILURE: 'FETCH_GUEST_FAILURE',
  RESET_GUEST: 'RESET_GUEST',
};

const defaultService = new GuestService({});

export const fetchGuests = (service = defaultService) => async dispatch => {
  dispatch({
    type: actions.FETCH_GUEST_BEGIN,
  });
  try {
    const res = await service.list();
    dispatch({ type: actions.FETCH_GUEST_SUCCESS, payload: res });
  } catch (e) {
    dispatch({ type: actions.FETCH_GUEST_FAILURE, payload: e });
    throw e;
  }
};
