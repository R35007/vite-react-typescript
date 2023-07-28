import { describe, expect, it, vi, waitFor } from '~libs/vitest';

// helpers
import configureStore from '~helpers/configureStore';

// redux
import { actions, initialState, reducer, saga } from '~features/Counter/redux';
import getRootSaga from '~helpers/getRootSaga';

describe('Counter Reducer Test Suite', () => {
  const store = configureStore({
    reducer: { counter: reducer },
    sagaActionWatcher: getRootSaga([saga]),
  });

  it('should dispatch increment by 1', () => {
    store.dispatch(actions.increment());

    const state = store.getState();

    expect(state).toEqual({ counter: { ...initialState, count: 1 } });
  });

  it('should dispatch increment by positive value', () => {
    store.dispatch(actions.incrementByAmount(5));

    const state = store.getState();

    expect(state).toEqual({ counter: { ...initialState, count: 6 } });
  });

  it('should dispatch decrement by 1', () => {
    store.dispatch(actions.decrement());
    const state = store.getState();

    expect(state).toEqual({ counter: { ...initialState, count: 5 } });
  });

  it('should dispatch increment by negative value', () => {
    store.dispatch(actions.incrementByAmount(-4));
    const state = store.getState();

    expect(state).toEqual({ counter: { ...initialState, count: 1 } });
  });

  it('should dispatch increment async by 1', async () => {
    const dispatchSpy = vi.spyOn(actions, 'increment');

    store.dispatch(actions.incrementAsync());
    await waitFor(() => expect(dispatchSpy).toBeCalled(), { timeout: 2000 });

    const state = store.getState();
    await waitFor(() => expect(state).toEqual({ counter: { ...initialState, count: 2, loading: false } }));
  });

  it('should dispatch decrement async by 1', async () => {
    const dispatchSpy = vi.spyOn(actions, 'decrement');

    store.dispatch(actions.decrementAsync());
    await waitFor(() => expect(dispatchSpy).toBeCalled(), { timeout: 2000 });

    const state = store.getState();
    await waitFor(() => expect(state).toEqual({ counter: { ...initialState, count: 1, loading: false } }));
  });

  it('should dispatch increment async by positive value', async () => {
    const dispatchSpy = vi.spyOn(actions, 'incrementByAmount');

    store.dispatch(actions.incrementByAmountAsync('4'));
    await waitFor(() => expect(dispatchSpy).toBeCalled(), { timeout: 2000 });

    const state = store.getState();
    await waitFor(() => expect(state).toEqual({ counter: { ...initialState, count: 5, loading: false } }));
  });

  it('should dispatch increment async by negative value', async () => {
    const dispatchSpy = vi.spyOn(actions, 'incrementByAmount');

    store.dispatch(actions.incrementByAmountAsync('-4'));
    await waitFor(() => expect(dispatchSpy).toBeCalled(), { timeout: 2000 });

    const state = store.getState();
    await waitFor(() => expect(state).toEqual({ counter: { ...initialState, count: 1, loading: false } }));
  });

  it('should set count to 0 when a saga fails', async () => {
    const dispatchSpy = vi.spyOn(actions, 'onIncrementFailure');

    store.dispatch(actions.incrementByAmountAsync('xxx'));
    await waitFor(() => expect(dispatchSpy).toBeCalled(), { timeout: 2000 });

    const state = store.getState();
    await waitFor(() => expect(state).toEqual({ counter: { ...initialState, count: 0, loading: false } }));
  });
});
