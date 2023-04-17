import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

function Block({ name, type, req }) {
  return (
    <div className="flex bg-gray-300 items-center justify-between p-4 gap-4">
      <input value={name} defaultValue="name" className="px-4 py-2" />
      <select value={type} className="px-4 py-2">
        <option>Object</option>
        <option>String</option>
        <option>Integer</option>
        <option>Boolean</option>
      </select>
      Required
      <label for="AcceptConditions" class="relative h-8 w-14 cursor-pointer">
        <input
          type="checkbox"
          id="AcceptConditions"
          class="peer sr-only"
          checked={req}
        />

        <span class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-blue-500"></span>

        <span class="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
      </label>
      {/* plus only apprears if the type is a object */}
      {type === "object" && (
        <button>
          <AiOutlinePlusSquare className="h-8 w-8" />
        </button>
      )}
      <button>
        <MdDeleteOutline className="h-8 w-8" />
      </button>
    </div>
  );
}

export default Block;
