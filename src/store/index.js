import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

export default (preloadedState = {}) => {
  const middlewares = [thunkMiddleware];
  const appliedMiddlewares = applyMiddleware(...middlewares);
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(appliedMiddlewares),
  );
};
