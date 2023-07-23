/* eslint-disable @typescript-eslint/no-explicit-any */
// built-ins
import { configureStore as createStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

// types
import type { Action, AnyAction, ConfigureStoreOptions, Middleware, StoreEnhancer } from '@reduxjs/toolkit';
import type { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import type { TypedUseSelectorHook } from 'react-redux';

export interface ConfigureStoreProps<
  S,
  A extends Action = AnyAction,
  M extends ReadonlyArray<Middleware<object, S>> = [ThunkMiddlewareFor<S>],
  E extends ReadonlyArray<StoreEnhancer> = [StoreEnhancer]
> extends Omit<ConfigureStoreOptions<S, A, M, E>, 'middleware'> {
  middleware?: Array<Middleware<object, S>>;
}

const configureStore = <
  S = any,
  A extends Action = AnyAction,
  M extends ReadonlyArray<Middleware<object, S>> = [ThunkMiddlewareFor<S>],
  E extends ReadonlyArray<StoreEnhancer> = [StoreEnhancer]
>({
  middleware = [],
  ...configureStoreProps
}: ConfigureStoreProps<S, A, M, E>) => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore({
    ...configureStoreProps,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware).concat(sagaMiddleware),
  });

  return {
    runSaga: sagaMiddleware.run.bind(sagaMiddleware),
    store,
    useDispatch: () => useDispatch<typeof store.dispatch>(),
    useSelector: useSelector as TypedUseSelectorHook<ReturnType<typeof store.getState>>,
  };
};

export default configureStore;
