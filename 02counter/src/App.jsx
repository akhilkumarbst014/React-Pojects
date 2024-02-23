import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  //let counter = 5
  const addValue = ()=>{
      //console.log("clicked:", {counter});
      //counter = counter + 1
      if(counter < 22){
        
      setCounter(counter+1)

      // setCounter(counter => counter + 1) 
      // setCounter(counter => counter + 1)  
      // setCounter(counter => counter + 1)  
      // setCounter(counter => counter + 1)
      /* this above code is use to increase the counter 4 times after on click */


      }
  }
  const removevalue = ()=>{
    if(counter>0){
    setCounter(counter-1);
    }
  }

  return (
    <>
        <h1>Chai aur react</h1>
        <h2>Counter Value: {counter}</h2>
        <button
        onClick={addValue}>Add Value{counter}</button>
        <br/>
        <button onClick={removevalue}>Remove Value{counter}</button>
    </>
  )
}

export default App
