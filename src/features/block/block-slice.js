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

    addInnerBlock(state, action) {
      // Define a recursive function to find the parent block by id
      const findParentBlock = (blocks, parentId) => {
        for (const block of blocks) {
          if (block.id === parentId) {
            return block;
          }
          if (block.innerBlocks && block.innerBlocks.length > 0) {
            const innerBlock = findParentBlock(block.innerBlocks, parentId);
            if (innerBlock) {
              return innerBlock;
            }
          }
        }
        return null;
      };

      // Find the parent block based on its id and add the new block into its innerBlocks array
      const parentId = action.payload.parentId;
      const parentBlock = findParentBlock(state.blocks, parentId);
      if (parentBlock) {
        // Generate the new id based on the parent block's id and level
        const newId = parentId * 100 + (Math.floor(Math.random() * 99) + 10);
        // Push the new block into the parent block's innerBlocks array
        parentBlock.innerBlocks.push({
          id: newId,
          name: action.payload.name,
          type: action.payload.type,
          required: action.payload.required,
          level: action.payload.level + 1,
          innerBlocks: [],
        });
      }
    },

    //reducer to set any block.
    //we get the specific block from its by recursively calling the search function and then we change the properties of the block

    setBlock(state, action) {
      // Define a recursive function to find the current block by id
      const findCurrentBlock = (blocks, blockId) => {
        for (const block of blocks) {
          if (block.id === blockId) {
            return block;
          }
          if (block.innerBlocks && block.innerBlocks.length > 0) {
            const innerBlock = findCurrentBlock(block.innerBlocks, blockId);
            if (innerBlock) {
              return innerBlock;
            }
          }
        }
        return null;
      };

      // Find the current block based on its id and then make changes in it
      // we have to recursively search for it since it can be an inner block
      const currentId = action.payload.id;
      const currentBlock = findCurrentBlock(state.blocks, currentId);
      if (currentBlock) {
        // when you find the current block make the changes
        currentBlock.name = action.payload.name;
        currentBlock.type = action.payload.type;
        currentBlock.required = action.payload.required;
      }
    },


    //reducer function to remove a block
    delBlock(state, action) {
      //first check whether its an outer block, if yes then do normal filtering in blocks
      if (action.payload.level === 1) {
        state.blocks = state.blocks.filter(
          (block) => block.id !== action.payload.id
        );
      } else {
        // Define a recursive function to find the parent block by id
        const findParentBlock = (blocks, parentId) => {
          for (const block of blocks) {
            if (block.innerBlocks && block.innerBlocks.length > 0) {
              const innerBlockIndex = block.innerBlocks.findIndex(
                (innerBlock) => innerBlock.id === parentId
              );
              if (innerBlockIndex !== -1) {
                // Remove the inner block from the parent block's innerBlocks array
                block.innerBlocks.splice(innerBlockIndex, 1);
                return true;
              } else {
                const innerBlock = findParentBlock(block.innerBlocks, parentId);
                if (innerBlock) {
                  return true;
                }
              }
            }
          }
          return false;
        };

        // Find the parent block that contains the inner block based on its id and remove the inner block
        const blockId = action.payload.id;
        const parentBlockRemoved = findParentBlock(state.blocks, blockId);
        if (parentBlockRemoved) {
          return state; // Return the updated state with the inner block removed
        } else {
          return state; // Return the original state if the inner block was not found
        }
      }
    },
  },
});

export const blockActions = blockSlice.actions;

export default blockSlice;
