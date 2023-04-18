import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { blockActions } from "../../features/block/block-slice";
import Block from "../Block/Block";

function Interface() {
  const blocksArr = useSelector((state) => state.block.blocks);

  const dispatch = useDispatch();
  const addBlockFunc = () => {
    dispatch(
      blockActions.addBlock({
        name: "New Object Block",
        type: "Object",
        required: false,
        level: 1,
      })
    );
  };

  const renderInnerBlocks = (innerBlocks, level) => {
    if (!innerBlocks || innerBlocks.length === 0) {
      return null;
    }

    return innerBlocks.map((innerBlock) => (
      <div key={innerBlock.id}>
        <Block
          id={innerBlock.id}
          name={innerBlock.name}
          type={innerBlock.type}
          req={innerBlock.required}
          level={innerBlock.level}
        />
        {/* Recursively render inner blocks at the next level */}
        {renderInnerBlocks(innerBlock.innerBlocks, level + 1)}
      </div>
    ));
  };


  const showInConsole = () => {
    console.log(blocksArr)
  }
  return (
    <div className="bg-gray-50 shadow-lg rounded-md p-4 w-full lg:w-1/2">
      <div className="flex flex-col p-8 border-2 border-gray-500 rounded-md sm:min-w-[20rem] font-sm sm:font-base">
        <div className="flex items-center justify-between mb-2 w-full gap-4">
          <h2>Field Name and Type</h2>
          {blocksArr.length>0 && <button className="bg-green-500 font-semibold text-gray-900 rounded-md px-4 py-2 hover:bg-transparent hover:border-green-500 hover:text-green-500 border-2" onClick={showInConsole}>
            Save to Console
          </button>}
          <button onClick={addBlockFunc}>
            <AiOutlinePlusSquare className="h-8 w-8" />
          </button>
        </div>
        {blocksArr?.map((b) => {
          // console.log(b.id, b.required);
          return (
            <div className="flex flex-col">
              <Block
                id={b.id}
                name={b.name}
                type={b.type}
                req={b.required}
                level={b.level}
              />
              {renderInnerBlocks(b.innerBlocks, b.level + 1)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Interface;
