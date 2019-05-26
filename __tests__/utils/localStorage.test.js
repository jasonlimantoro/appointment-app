import * as storage from '../../src/components/utils/localStorage';
import { flushUser, getUser, saveUser } from '../../src/actions/users.action';

describe('Local Storage API', () => {
  const values = {
    field1: 'value1',
    field2: 'value2',
  };
  const key = 'key';
  beforeEach(() => {
    localStorage.removeItem(key);
  });

  it('should be able to save values as string', () => {
    storage.save(key, values);
    const actual = JSON.parse(localStorage.getItem(key));
    expect(actual).toEqual(values);
  });

  it('should be able to retrieve values as JSON', () => {
    localStorage.setItem(key, JSON.stringify(values));
    const actual = storage.get(key);
    expect(actual).toEqual(values);
  });

  it('should return null when item does not exist in local storage', () => {
    const actual = storage.get(key);
    expect(actual).toBeNull();
  });

  it('should be able to remove values', () => {
    localStorage.setItem(key, JSON.stringify(values));
    storage.flush(key);
    const actual = localStorage.getItem(key);
    expect(actual).toEqual(null);
  });
});

describe('User actions interacts with localstorage', () => {
  const key = 'auth';
  const user = {
    username: 'John Doe',
    token: 'random',
  };
  beforeEach(() => {
    localStorage.removeItem(key);
  });
  describe('Save user', () => {
    it('should save the user object in the localStorage', () => {
      saveUser(user);
      const actual = JSON.parse(localStorage.getItem(key));
      expect(actual).toEqual(user);
    });
    it('should not save new user object when existing user exists', () => {
      localStorage.setItem(key, JSON.stringify(user));
      saveUser({
        user: {
          username: 'some username',
          token: 'some token',
        },
      });
      const actual = JSON.parse(localStorage.getItem(key));
      expect(actual).toEqual(user);
    });
  });
  describe('get user', () => {
    it('should be able to retrieve the user in the storage storage', () => {
      localStorage.setItem(key, JSON.stringify(user));
      const actual = getUser();
      expect(actual).toEqual(user);
    });
    it('should return undefined when none is stored in storage storage', () => {
      const actual = getUser();
      expect(actual).toBeNull();
    });
  });
  describe('flush user', () => {
    it('should be able to remove the user from the storage storage', () => {
      localStorage.setItem(key, JSON.stringify(user));
      flushUser();
      const actual = localStorage.getItem(key);
      expect(actual).toBeNull();
    });
  });
});
