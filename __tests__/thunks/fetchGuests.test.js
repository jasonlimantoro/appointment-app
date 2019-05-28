import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as guestActions from '../../src/actions/guests.action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const guest = {
  firstName: 'John',
  lastName: 'John',
  email: 'john@example.com',
  company: 'Google',
};

const mockServiceCreator = (success = true, err = Error('Unknown Error')) => ({
  list: success
    ? jest.fn().mockResolvedValue(guest)
    : jest.fn().mockRejectedValue(err),
});

describe('Fetch Guests', () => {
  let store;
  beforeEach(() => {
    store = mockStore();
  });

  it('should begin fetching when success', async () => {
    const service = mockServiceCreator(true);
    await store.dispatch(guestActions.fetchGuests(service));
    const actual = store.getActions();
    const expected = [
      { type: guestActions.actions.FETCH_GUEST_BEGIN },
      { type: guestActions.actions.FETCH_GUEST_SUCCESS, payload: guest },
    ];
    expect(service.list).toHaveBeenCalledTimes(1);
    expect(actual).toEqual(expected);
  });
  it('should begin fetching when fails', async () => {
    const service = mockServiceCreator(false);
    try {
      await store.dispatch(guestActions.fetchGuests(service));
    } catch (e) {
      expect(e.message).toEqual('Unknown Error');
    }
    const actual = store.getActions();
    const expected = [
      { type: guestActions.actions.FETCH_GUEST_BEGIN },
      {
        type: guestActions.actions.FETCH_GUEST_FAILURE,
        payload: Error('Unknown Error'),
      },
    ];
    expect(service.list).toHaveBeenCalledTimes(1);
    expect(actual).toEqual(expected);
  });
});
