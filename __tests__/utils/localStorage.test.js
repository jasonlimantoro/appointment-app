import * as local from '../../src/components/utils/localStorage';

const values = {
  field1: 'value1',
  field2: 'value2',
};

const key = 'key';

describe('Local Storage API', () => {
  it('should be able to save values as string', () => {
    local.save(key, values);
    const actual = JSON.parse(localStorage.getItem(key));
    expect(actual).toEqual(values);
  });

  it('should be able to retrieve values as JSON', () => {
    localStorage.setItem(key, JSON.stringify(values));
    const actual = local.get(key);
    expect(actual).toEqual(values);
  });

  it('should be able to remove values', () => {
    localStorage.setItem(key, JSON.stringify(values));
    local.flush(key);
    const actual = localStorage.getItem(key);
    expect(actual).toEqual(null);
  });
});
