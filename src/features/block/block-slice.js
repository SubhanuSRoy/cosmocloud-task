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
        level: action.payload.level,
        innerBlocks: [],
      });
    },

    //reducer to set an outer block.
    //we get the specific block from its id and then we change the properties of the block
    setBlock(state, action) {
      state.blocks.map((block) => {
        if (block.id === action.payload.id) {
          block.name = action.payload.name;
          block.type = action.payload.type;
          block.required = action.payload.required;
        }
      });
    },

    //reducer function to add an inner block
    setInnerBlock(state, action) {
      state.blocks.map((block) => {
        if (block.type === "Object") {
          block.innerBlocks?.map((ib) => {
            ib.name = action.payload.name;
            ib.type = action.payload.type;
            ib.required = action.payload.required;
          });
        }
      });
    },
    //reducer function to remove a block
    delBlock(state, action) {
      state.blocks = state.blocks.filter(
        (block) => block.id !== action.payload
      );
    },
  },
});

export const blockActions = blockSlice.actions;

export default blockSlice;
