// store
import type store from 'src/configs/store';

export const getCount = (state: ReturnType<typeof store.getState>) => state.counter.count;
export const getLoading = (state: ReturnType<typeof store.getState>) => state.counter.loading;
