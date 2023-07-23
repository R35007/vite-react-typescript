// helpers
import configureStore from '@helpers/configureStore';

// reducers
import counterReducer from '@features/Counter/reducer/slice';

// sagas
import counterSaga from '@features/Counter/reducer/saga';

// helpers
import getRootSaga from '@helpers/getRootSaga';

const { store, runSaga, useDispatch, useSelector } = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

runSaga(getRootSaga([counterSaga]));

export { useDispatch, useSelector };

export default store;
