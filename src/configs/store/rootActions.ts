// type
import type { SliceActions } from '~helpers/configureStore';

// feature redux
import * as counter from '~features/Counter/redux';

const rootActions = {
  ...counter.actions,
};

export type RootActionType = SliceActions<typeof rootActions>;

export default rootActions;
