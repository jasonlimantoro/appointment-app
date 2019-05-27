import { getNestedObjectValue } from '../../src/components/utils/helpers';

describe('Helpers', () => {
  describe('getNestedObjectValues', () => {
    let createRef;
    const nestedObj = {
      users: {
        1: {
          name: 'John Doe',
          posts: [{ title: 'Some title', description: 'Some description' }],
        },
      },
    };
    beforeEach(() => {
      createRef = (fallback = null) =>
        getNestedObjectValue(nestedObj, fallback);
    });

    it('should work', () => {
      const actual = createRef()(['users', 1, 'posts', 0]);
      expect(actual).toEqual({
        title: 'Some title',
        description: 'Some description',
      });
    });

    it('should return null when path is partially/fully invalid', () => {
      const actual1 = createRef()(['users', 2, 3, 'some-path']);
      const actual2 = createRef()(['name', 3, 'some-other-path', 4, 5]);
      expect(actual1).toBeNull();
      expect(actual2).toBeNull();
    });

    it('should return the fallback value when path is partially/fully invalid', () => {
      const actual1 = createRef('Anonymous')(['users', 2, 'name']);
      const actual2 = createRef({ name: 'Anonymous', posts: [] })(['users', 3]);
      expect(actual1).toEqual('Anonymous');
      expect(actual2).toEqual({ name: 'Anonymous', posts: [] });
    });

    it('should return the full object when path is an empty array', () => {
      const actual = createRef()([]);
      expect(actual).toEqual(nestedObj);
    });
  });
});
