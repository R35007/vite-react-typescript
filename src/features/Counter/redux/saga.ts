// built-ins
import { delay, put, takeEvery } from 'redux-saga/effects';

// types
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Effect, ForkEffect } from 'redux-saga/effects';

// actions
import { actions } from './slice';

export function* watchIncrementAsync(): Generator<Effect, void> {
  yield delay(1000);
  yield put(actions.increment());
  yield put(actions.onIncrementSuccess());
}

export function* watchDecrementAsync(): Generator<Effect, void> {
  yield delay(1000);
  yield put(actions.decrement());
  yield put(actions.onIncrementSuccess());
}

export function* watchIncrementByAmountAsync(action: PayloadAction<string | undefined>): Generator<Effect, void> {
  try {
    if (!action.payload || Number.isNaN(parseInt(action.payload, 10))) {
      throw new Error('Invalid parameter');
    }
    yield delay(1000);
    yield put(actions.incrementByAmount(parseInt(action.payload, 10)));
    yield put(actions.onIncrementSuccess());
  } catch (error) {
    yield put(actions.onIncrementFailure());
  }
}

export function* watchCounterSagas(): Generator<ForkEffect, void> {
  yield takeEvery(actions.incrementAsync, watchIncrementAsync);
  yield takeEvery(actions.decrementAsync, watchDecrementAsync);
  yield takeEvery(actions.incrementByAmountAsync, watchIncrementByAmountAsync);
}

const counterSagas = watchCounterSagas;

export default counterSagas;
