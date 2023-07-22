/* eslint-disable no-param-reassign */

// built-ins
import { createSlice } from '@reduxjs/toolkit';

// type
import type { PayloadAction } from '@reduxjs/toolkit';
import type store from 'src/configs/store';

type InitialState = {
  count: number;
};
const initialState: InitialState = {
  count: 0,
};

const countSlice = createSlice({
  initialState,
  name: 'counter',
  reducers: {
    decrement: (state, action: PayloadAction<number | undefined>) => {
      state.count -= action.payload || 1;
    },
    increment: (state, action: PayloadAction<number | undefined>) => {
      state.count += action.payload || 1;
    },
  },
});

export default countSlice.reducer;
export const { decrement, increment } = countSlice.actions;

export const getCount = (state: ReturnType<typeof store.getState>) => state.counter.count;
