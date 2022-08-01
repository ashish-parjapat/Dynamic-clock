
import React, {useState} from "react";

let time = new Date().toLocaleTimeString();



function App() {
setInterval(getTime,1000);

  const [currTime,nextTime] = useState(time);
  function getTime(){
  const now=new Date().toLocaleTimeString();
  nextTime(now)
    
  }
  

  return (
    <div className="container">
      <h1>{currTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
