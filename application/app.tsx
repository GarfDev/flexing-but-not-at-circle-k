import React from "react";
import Reset from "./reset";
import Homepage from './features/homepage';

const App = (): JSX.Element => {
  // Main return
  return (
    <div>
      <Homepage />
      <Reset />
    </div>
  );
};

export default App;
