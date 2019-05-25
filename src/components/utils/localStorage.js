export const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // do nothing
  }
};

export const get = key => {
  let result = {};
  try {
    result = JSON.parse(localStorage.getItem(key));
  } catch (e) {
    // do nothing
  }
  return result;
};
