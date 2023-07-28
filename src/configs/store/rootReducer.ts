// feature redux
import * as counter from '~features/Counter/redux';

const rootReducer = {
  counter: counter.reducer,
};

export type RootReducerType = typeof rootReducer;

export default rootReducer;
