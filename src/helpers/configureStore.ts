/* eslint-disable @typescript-eslint/no-explicit-any */
// built-ins
import { configureStore as createStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// types
import type {
  Action,
  AnyAction,
  ConfigureStoreOptions,
  Dispatch,
  EnhancedStore,
  Middleware,
  StoreEnhancer,
  ThunkMiddleware,
} from '@reduxjs/toolkit';
import type { Saga } from 'redux-saga';

export interface ConfigureStoreProps<
  S,
  A extends Action = AnyAction,
  M extends ReadonlyArray<Middleware<object, S>> = [ThunkMiddleware<S, A>],
  E extends ReadonlyArray<StoreEnhancer> = [StoreEnhancer]
> extends Omit<ConfigureStoreOptions<S, A, M, E>, 'middleware'> {
  middleware?: Array<Middleware<object, S, Dispatch<A>>>;
  sagaActionWatcher?: Saga;
}

const configureStore = <
  S = any,
  A extends Action = AnyAction,
  M extends ReadonlyArray<Middleware<object, S>> = [ThunkMiddleware<S, A>],
  E extends ReadonlyArray<StoreEnhancer> = [StoreEnhancer]
>({
  middleware = [],
  sagaActionWatcher,
  ...configureStoreProps
}: ConfigureStoreProps<S, A, M, E>) => {
  const rootMiddlewares = [...middleware];

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  if (sagaActionWatcher) {
    rootMiddlewares.push(sagaMiddleware);
  }

  const store: EnhancedStore<S, A, Middleware<object, S, Dispatch<A>>[], E> = createStore({
    ...configureStoreProps,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootMiddlewares),
  });

  // run saga middleware
  if (sagaActionWatcher) {
    sagaMiddleware.run(sagaActionWatcher);
  }

  return store;
};

export type SliceActions<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => infer A ? A : never;
}[keyof T];

export default configureStore;
