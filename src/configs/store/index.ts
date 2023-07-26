// built-ins
import { useDispatch, useSelector } from 'react-redux';

// helpers
import configureStore from '@helpers/configureStore';

// types
import type { Dispatch } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootActionType } from './rootActions';
import type { RootReducerType } from './rootReducer';

// Root Reducer, Actions and Sagas
import rootActions from './rootActions';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const store = configureStore({
  reducer: rootReducer,
  sagaActionWatcher: rootSaga,
});

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = Dispatch<RootActionType>;
export type SelectorType = TypedUseSelectorHook<StateType>;

const useAppDispatch = () => useDispatch<DispatchType>();
const useAppSelector = useSelector as SelectorType;

export { RootActionType, RootReducerType, rootActions, rootReducer, rootSaga, useAppDispatch, useAppSelector };

export default store;
