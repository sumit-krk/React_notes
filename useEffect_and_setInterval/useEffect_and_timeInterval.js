//Time.js
-----------------
import React, { useEffect, useState } from "react";
const Time=()=>{
    const [count,setCount]=useState(10);
    useEffect(()=>{
        setInterval(()=>{
            setCount((prev)=> (prev-1/2))
        },2000);
    },[])
    return <>
        <div>{count}</div>
    </>
}
export default Time;

//App.js
--------------------------------------------------------------
import './App.css';
import Apifetch from './components/Apifetch';
import Time from './components/Time';
function App() {
  return (
    <div className="App">
        {/* <Apifetch /> */}
        <Time />
    </div>
  );
}

export default App;
