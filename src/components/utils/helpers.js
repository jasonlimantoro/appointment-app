/**
 * Determine whether a thing is an object
 * @private
 * @param obj
 * @returns {boolean}
 */
const isObject = obj => obj !== null && typeof obj === 'object';

/**
 * To set all values of deeply nested object to some value
 * @param obj
 * @param value
 * @param visited
 * @param result
 */
export const setNestedObjectValues = (
  obj,
  value,
  visited = new WeakMap(),
  result = {},
) => {
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true);
        // eslint-disable-next-line no-param-reassign
        result[key] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, result[key]);
      }
    } else {
      // eslint-disable-next-line no-param-reassign
      result[key] = value;
    }
  }
  return result;
};

/**
 * Halt script execution for sometime
 * @param ms
 * @returns {Promise<*>}
 */
export const sleep = async ms => new Promise(r => setTimeout(r, ms));

/**
 * Transform error to string so it can be rendered easily in the DOM
 * @param error
 * @returns {string}
 */
export const transformErrorToString = error => {
  if (typeof error === 'object') {
    return error.message;
  }
  return error;
};

/**
 * Return the nested value of an object
 * @param obj: Object
 * @param fallback | null
 * @returns {function(path: Array): any}
 */
export const getNestedObjectValue = (obj, fallback = null) => path => {
  return path.reduce((accum, current) => {
    return accum && accum[current] ? accum[current] : fallback;
  }, obj);
};
