import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import blockSlice from '../features/block/block-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    block: blockSlice.reducer,
  },
});
