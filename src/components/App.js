
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  function increase(){
    setCount(count+1);
  }
  return (
    <div>
       
          <p>Button clicked {count} times</p>
          <button onClick={increase}>Click me</button>
        
    </div>
  )
}

export default App
