import { configureStore } from '@reduxjs/toolkit';
import blockSlice from '../features/block/block-slice';

export const store = configureStore({
  reducer: {
    block: blockSlice.reducer,
  },
});
