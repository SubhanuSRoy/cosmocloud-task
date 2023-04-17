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
        required: true,
        level: 1,
      })
    );
  };

  return (
    <div className="bg-gray-200 shadow-lg rounded-md p-4">
      <div className="flex flex-col p-8 border-2 border-gray-500 rounded-md">
        <div className="flex items-center justify-between mb-2">
          <h2>Field Name and Type</h2>
          <button onClick={addBlockFunc}>
            <AiOutlinePlusSquare className="h-8 w-8" />
          </button>
        </div>
        {blocksArr?.map((b) => {
          console.log(b.id, b.required);
          return (
            <Block id={b.id} name={b.name} type={b.type} req={b.required} />
          );
        })}
      </div>
    </div>
  );
}

export default Interface;
