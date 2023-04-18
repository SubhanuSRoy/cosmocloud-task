import React, { useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { blockActions } from "../../features/block/block-slice";

function Block({ id, name, type, req, level }) {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const nameChange = (e) => {
    dispatch(
      blockActions.setBlock({
        id: id,
        name: e.target.value,
        type: type,
        required: req,
      })
    );
  };
  // console.log(level);
  return (
    <div
      className="flex flex-wrap bg-gray-100 items-center justify-between p-4 gap-4 my-2 rounded-md shadow-md text-sm sm:text-base"
      style={{ marginLeft: level > 1 ? `${level}rem` : 0 }}
      // onMouseEnter={() => setShow(true)}
      // onMouseLeave={() => setShow(false)}
    >
      <h5 className="text-gray-600">{level === 1 ? id : null}</h5>
      <input value={name} className="pl-1 sm:px-4 py-2" onChange={nameChange} />
      <select
        value={type}
        className="sm:px-4 py-2"
        onChange={(e) => {
          dispatch(
            blockActions.setBlock({
              id: id,
              type: e.target.value,
              name: name,
              required: req,
            })
          );
        }}
      >
        <option>Object</option>
        <option>String</option>
        <option>Integer</option>
        <option>Boolean</option>
      </select>
      <div className="hidden sm:w-20"></div>
      {/* <label for="requiredCheck" class="relative h-8 cursor-pointer">
        <input
          type="checkbox"
          id="requiredCheck"
          // className="peer sr-only"
          checked={req}
          // defaultChecked={req}
          onChange={(e) => {
            dispatch(
              blockActions.setBlock({
                id: id,
                name: name,
                type: type,
                required: e.target.checked,
              })
            );
          }}
        />
        <span class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-blue-500"></span>
        <span class="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
        
      </label> */}

      {show && (
        <div className="flex gap-4 justify-between items-center">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-full border-red-300 border-2"
              checked={req}
              onChange={(e) => {
                dispatch(
                  blockActions.setBlock({
                    id: id,
                    name: name,
                    type: type,
                    required: e.target.checked,
                  })
                );
              }}
            />
            <p className="">Required</p>
          </div>

          {/* plus only apprears if the type is a object */}
          {type === "Object" && (
            <button>
              <AiOutlinePlusSquare
                className="h-6 w-6 sm:h-8 sm:w-8"
                onClick={() => {
                  dispatch(
                    blockActions.addInnerBlock({
                      parentId: id,
                      name: "New Object Block",
                      type: "Object",
                      required: false,
                      level: level,
                    })
                  );
                }}
              />
            </button>
          )}
          {type !== "Object" && <div className="sm:w-8"></div>}
          <button>
            <MdDeleteOutline
              className="h-6 w-6 sm:h-8 sm:w-8"
              onClick={() => {
                dispatch(blockActions.delBlock({ level: level, id: id }));
              }}
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default Block;
