import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { userReducer } from './users/userReducer';

//import { createDevTools } from '@redux-devtools/core';
//import LogMonitor from '@redux-devtools/log-monitor';
import thunk from 'redux-thunk';
import { bookSortReducer } from './booksSorting/bookSortReducer';

export const allReducers = combineReducers({
  user: userReducer,
  sorting: bookSortReducer,
});

const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
    })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

export const store = createStore(
  allReducers,
  enhancer
  );

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

