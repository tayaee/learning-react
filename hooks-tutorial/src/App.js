import React, {useState} from "react";
import Info from "./Info";

const App = () => {
  const [visible, setVisible] = useState(true);
  return <div>
    <button onClick={() => setVisible(!visible)}>Toggle</button>
    {visible && <Info/>}
  </div>
};

export default App;