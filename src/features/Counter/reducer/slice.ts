/* eslint-disable no-param-reassign */

// built-ins
import { createSlice } from '@reduxjs/toolkit';

// type
import type { PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  loading: boolean;
  count: number;
};

const initialState: InitialState = {
  count: 0,
  loading: false,
};

const reducers = {
  decrement: (state: InitialState) => {
    state.count -= 1;
  },
  increment: (state: InitialState) => {
    state.count += 1;
  },
  incrementByAmount: (state: InitialState, action: PayloadAction<number>) => {
    state.count += action.payload;
  },
  incrementByAmountAsyncFailure: (state: InitialState) => {
    state.count = 0;
    state.loading = false;
  },
  incrementByAmountAsyncSuccess: (state: InitialState) => {
    state.loading = false;
  },
};

const sagaActions = {
  decrementAsync: (state: InitialState) => {
    state.loading = true;
  },

  incrementAsync: (state: InitialState) => {
    state.loading = true;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  incrementByAmountAsync: (state: InitialState, _action: PayloadAction<string | undefined>) => {
    state.loading = true;
  },
};

const countSlice = createSlice({
  initialState,
  name: 'counter',
  reducers: {
    ...reducers,
    ...sagaActions,
  },
});

export default countSlice.reducer;
export const counterActions = countSlice.actions;
