import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from 'c:/Users/akhil/Desktop/react- project/03tailwindprops/src/components/card.jsx' 
                  // Or you can write only on above = './component/Card'

function App() {
  const [count, setCount] = useState(0)

  // let myObj = {
  //   username: "Akhilesh",
  //   age: 20,
  //   email: "akhil@google.com"
  // }

  // let newArr= [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username = "chai aur code" btnText = "click me"/*somObj = {myObj} someArr ={newArr} ---> this comment is use to add properties in the card which shown in the in console of browser*/ /> 
      <Card username = " Ankita" btnText = "visit me"/>
    </>
  )
}

export default App
