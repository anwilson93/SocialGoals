import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import session from './session';
import goals from './goals';
// import comments from './comments';
import likes from './likes';
import follows from './follow';
import diaries from './diaries';
import completed from './goals';
import search from './search';


const rootReducer = combineReducers({
  session,
  goals,
  // comments,
  likes,
  follows,
  diaries,
  completed,
  search
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
