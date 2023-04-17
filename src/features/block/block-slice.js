import { createSlice } from "@reduxjs/toolkit";

const blockSlice = createSlice({
  name: "block",
  initialState: {
    blocks:[]
  },
  reducers: {
    addBlock(state, action) {
      state.blocks.push(action.payload)
    },
  },
});

export const blockActions = blockSlice.actions;

export default blockSlice;
