import React from "react";


function Interface({ children }) {
  return (
    <div className="bg-gray-200 shadow-lg rounded-md p-4">
      <div className="border-2 border-gray-500 rounded-md">
        {children}
      </div>
    </div>
  );
}

export default Interface;
