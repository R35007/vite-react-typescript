// effects
import { all, spawn } from 'redux-saga/effects';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (sagas: Array<(...args: any[]) => any>) =>
  function* rootSaga() {
    yield all(sagas.map((saga) => spawn(saga)));
  };
