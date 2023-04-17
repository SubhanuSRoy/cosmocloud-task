import { createSlice } from "@reduxjs/toolkit";

const blockSlice = createSlice({
  name: "block",
  //we keep a block array which will be an array of objects. Each object will be a block having id,name,type, required
  //we keep a count variable to increment it and use it as an unique id for each block. We can also set a pattern for the id.
  initialState: {
    blocks: [],
    count: 0,
  },
  reducers: {
    //reducer to add a block
    addBlock(state, action) {
      //coutn increases when new block is created
      state.count++;
      //we push the block object which we got from our component into the blocks array, wuth the id as the count
      state.blocks.push({
        id: state.count,
        name: action.payload.name,
        type: action.payload.type,
        required: action.payload.required,
      });
    },
    

  },
});

export const blockActions = blockSlice.actions;

export default blockSlice;
