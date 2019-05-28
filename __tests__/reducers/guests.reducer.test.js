import { actions } from '../../src/actions/guests.action';

import reducer, { initialState } from '../../src/reducers/guests.reducer';

const guest = {
  name: 'John Doe',
  email: 'John@example.com',
};

const error = {
  message: 'Fetch failure',
};

describe('Guest Reducer', () => {
  it('should return the initial state', () => {
    const actual = reducer(undefined, { type: undefined });
    expect(actual).toEqual(initialState);
  });

  it('should handle fetch begin action', () => {
    const actual = reducer(undefined, { type: actions.FETCH_GUEST_BEGIN });
    expect(actual).toEqual({
      ...initialState,
      isFetching: true,
    });
  });

  describe('fetch success', () => {
    it('should handle fetch success', () => {
      const actual = reducer(undefined, {
        type: actions.FETCH_GUEST_SUCCESS,
        payload: [guest],
      });
      expect(actual).toEqual({
        ...initialState,
        guests: [guest],
        fetched: true,
      });
    });
    it('should set the loading state to false', () => {
      const actual = reducer(
        {
          ...initialState,
          isFetching: true,
        },
        {
          type: actions.FETCH_GUEST_SUCCESS,
        },
      );
      expect(actual.isFetching).toEqual(false);
    });
  });

  describe('fetch failure', () => {
    it('should handle fetch failure', () => {
      const actual = reducer(undefined, {
        type: actions.FETCH_GUEST_FAILURE,
        payload: error,
      });
      expect(actual).toEqual({
        ...initialState,
        error,
      });
    });
    it('should set the loading state to false', () => {
      const actual = reducer(
        {
          ...initialState,
          isFetching: true,
        },
        {
          type: actions.FETCH_GUEST_FAILURE,
        },
      );
      expect(actual.isFetching).toEqual(false);
    });
  });
  it('should return the initial state when reset', () => {
    const actual = reducer(
      {
        ...initialState,
        isFetching: true,
        guests: [1, 3, 4],
        error: { message: 'some error' },
      },
      { type: actions.RESET_GUEST },
    );
    expect(actual).toEqual(initialState);
  });
});
