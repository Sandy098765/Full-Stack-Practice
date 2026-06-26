import React, { useEffect, useState } from 'react'
import Greeting from './Greeting';

export default function App() {
  // let name = "Sandhya";
  //useState--hook
  const[name, setName] = useState("Sandhya");

  const[color, setColor] = useState("Red");
  const[count, setCount] = useState(0);
  

  //useEffect----hook
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000)
  });



  return (
    <div>
         <Greeting name={name}/>
      {/* <h3>Good Evening {name}</h3> */}
      <button onClick={() => setName("Deia")}>Click for change</button>
    
      <h2>My fav color is {color}</h2>
      <button onClick={() => setColor("Lavender")}>Reveal color on click</button>

      <h2>The count is {count}!</h2>
      <button onClick={() => setCount(count + 1)}>count</button>

      <h1>The time start now {count}!</h1>
      
    </div>
  );
}




