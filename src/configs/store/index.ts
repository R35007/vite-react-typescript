// helpers
import configureStore from '~helpers/configureStore';

// Root Reducer, Actions and Sagas
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const store = configureStore({
  reducer: rootReducer,
  sagaActionWatcher: rootSaga,
});

export type StateType = ReturnType<typeof store.getState>;

export default store;
