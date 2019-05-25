export default class UtilService {
  constructor({ baseUrl = '' }) {
    this._baseUrl = baseUrl;
    this._cache = {};
  }

  // eslint-disable-next-line consistent-return
  async request(
    path,
    method = 'get',
    { credentials = 'include', cache = false, body, headers, ...rest } = {},
  ) {
    const fullUrl = `${this._baseUrl}/${path}`;
    let options;
    switch (method.toUpperCase()) {
      case 'GET': {
        const cachedData = this._cache[fullUrl];
        if (cache && cachedData !== undefined) {
          return cachedData;
        }
        options = {
          credentials,
          headers,
          ...rest,
        };
        break;
      }
      case 'POST':
      case 'PUT':
      case 'PATCH':
        options = {
          method,
          credentials,
          body,
          headers: {
            'Content-Type': 'application/json',
            ...(headers || {}),
          },
          ...rest,
        };
        break;
      default:
        throw new Error('Method not yet supported');
    }
    try {
      const res = await fetch(fullUrl, options);
      if (res.ok) {
        const data = await res.json();
        if (cache) {
          this._cache[fullUrl] = data;
        }
        return data;
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return { errorMessage: e };
    }
  }
}
