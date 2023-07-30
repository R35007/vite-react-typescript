import render, { describe, expect, it, screen, userEvent, waitFor } from '~libs/vitest';

// components
import Counter from '~features/Counter';

// configs
import rootReducer from '~configs/store/rootReducer';
import rootSaga from '~configs/store/rootSaga';

// helpers
import configureStore from '~helpers/configureStore';

describe('Counter Feature Test Suite', () => {
  beforeEach(async () => {
    await render(<Counter />, {
      store: configureStore({
        reducer: rootReducer,
        sagaActionWatcher: rootSaga,
      }),
    });
  });

  it('should increment by 1', async () => {
    const $incrementButton = screen.getByRole('button', { name: 'Increment' });
    await userEvent.click($incrementButton);
    expect(screen.getByRole('note').textContent).toBe('count is 1');
  });

  it('should decrement by 1', async () => {
    const $decrementButton = screen.getByRole('button', { name: 'Decrement' });
    await userEvent.click($decrementButton);
    expect(screen.getByRole('note').textContent).toBe('count is -1');
  });

  it('should increment positive by value', async () => {
    const $textbox = screen.getByLabelText('Count Increment Value');
    await userEvent.type($textbox, '5');

    const $incrementByValueButton = screen.getByRole('button', { name: 'Increment By Value' });
    await userEvent.click($incrementByValueButton);
    expect(screen.getByRole('note').textContent).toBe('count is 5');
  });

  it('should increment negative by value', async () => {
    const $textbox = screen.getByLabelText('Count Increment Value');
    await userEvent.type($textbox, '-5');

    const $incrementByValueButton = screen.getByRole('button', { name: 'Increment By Value' });
    await userEvent.click($incrementByValueButton);
    expect(screen.getByRole('note').textContent).toBe('count is -5');
  });

  it('should increment async by 1', async () => {
    const $incrementAsyncButton = screen.getByRole('button', { name: 'Increment Async' });
    await userEvent.click($incrementAsyncButton);

    await waitFor(() => expect(screen.getByRole('note').textContent).toBe('count is 1'), { timeout: 1000 });
  });

  it('should decrement async by 1', async () => {
    const $decrementAsyncButton = screen.getByRole('button', { name: 'Decrement Async' });
    await userEvent.click($decrementAsyncButton);

    await waitFor(() => expect(screen.getByRole('note').textContent).toBe('count is -1'), { timeout: 1000 });
  });

  it('should increment async positive by value', async () => {
    const $textbox = screen.getByLabelText('Count Increment Value');
    await userEvent.type($textbox, '5');

    const $decrementAsyncButton = screen.getByRole('button', { name: 'Increment Async By Value' });
    await userEvent.click($decrementAsyncButton);

    await waitFor(() => expect(screen.getByRole('note').textContent).toBe('count is 5'), { timeout: 1000 });
  });

  it('should increment async negative by value', async () => {
    const $textbox = screen.getByLabelText('Count Increment Value');
    await userEvent.type($textbox, '-5');

    const $decrementAsyncButton = screen.getByRole('button', { name: 'Increment Async By Value' });
    await userEvent.click($decrementAsyncButton);

    await waitFor(() => expect(screen.getByRole('note').textContent).toBe('count is -5'), { timeout: 1000 });
  });
});
