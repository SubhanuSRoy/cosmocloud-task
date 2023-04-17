import React from "react";
import Interface from "./Components/Interface/Interface";
import Block from "./Components/Block/Block";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <Interface>
        <Block name="Person" req={true} type="String" />
      </Interface>
    </div>
  );
}

export default App;
