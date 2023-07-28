// store
import type { StateType } from '~configs/store';

export const getCount = (state: StateType) => state.counter.count;
export const getLoading = (state: StateType) => state.counter.loading;
