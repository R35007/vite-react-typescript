// built-ins
import { delay, put, takeEvery } from 'redux-saga/effects';

// types
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Effect, ForkEffect } from 'redux-saga/effects';

// actions
import { counterActions } from './slice';

export function* watchIncrementAsync(): Generator<Effect, void> {
  yield delay(1000);
  yield put(counterActions.increment());
  yield put(counterActions.incrementByAmountAsyncSuccess());
}

export function* watchDecrementAsync(): Generator<Effect, void> {
  yield delay(1000);
  yield put(counterActions.decrement());
  yield put(counterActions.incrementByAmountAsyncSuccess());
}

export function* watchIncrementByAmountAsync(action: PayloadAction<string | undefined>): Generator<Effect, void> {
  try {
    if (!action.payload || Number.isNaN(parseInt(action.payload, 10))) {
      throw new Error('Invalid parameter');
    }
    yield delay(1000);
    yield put(counterActions.incrementByAmount(parseInt(action.payload, 10)));
    yield put(counterActions.incrementByAmountAsyncSuccess());
  } catch (error) {
    yield put(counterActions.incrementByAmountAsyncFailure());
  }
}

export function* watchCounterSagas(): Generator<ForkEffect, void> {
  yield takeEvery(counterActions.incrementAsync, watchIncrementAsync);
  yield takeEvery(counterActions.decrementAsync, watchDecrementAsync);
  yield takeEvery(counterActions.incrementByAmountAsync, watchIncrementByAmountAsync);
}

const counterSagas = watchCounterSagas;

export default counterSagas;
