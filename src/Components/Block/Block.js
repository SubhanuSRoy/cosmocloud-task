import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { blockActions } from "../../features/block/block-slice";

function Block({ id, name, type, req }) {
  const dispatch = useDispatch();
  const nameChange = (e) => {
    dispatch(
      blockActions.setBlock({
        id: id,
        name: e.target.value,
        type: type,
        required:req,
      })
    );
  };
  return (
    <div className="flex bg-gray-300 items-center justify-between p-4 gap-4 my-1 rounded-md">
      <h5 className="text-gray-600">{id}</h5>
      <input
        value={name}
        defaultValue="name"
        className="px-4 py-2"
        onChange={nameChange}
      />
      <select
        value={type}
        className="px-4 py-2"
        onChange={(e) => {
          dispatch(
            blockActions.setBlock({
              id: id,
              type: e.target.value,
              name:name,
              required:req,
            })
          );
        }}
      >
        <option>Object</option>
        <option>String</option>
        <option>Integer</option>
        <option>Boolean</option>
      </select>
      <div className="w-20"></div>
      {req && <p>Required</p>}
      {!req && <p>Not Required</p>}
      <label for="AcceptConditions" class="relative h-8 w-14 cursor-pointer">
        <input
          type="checkbox"
          id="AcceptConditions"
          class="peer sr-only"
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
      </label>
      {/* plus only apprears if the type is a object */}
      {type === "Object" && (
        <button>
          <AiOutlinePlusSquare className="h-8 w-8" />
        </button>
      )}
      {
        type!="Object" && (
          <div className="w-8"></div>
        )
      }
      <button>
        <MdDeleteOutline className="h-8 w-8" />
      </button>
    </div>
  );
}

export default Block;
