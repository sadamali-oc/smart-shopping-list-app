

import { useState } from 'react'
import './App.css'
import Button from './Button'


function App() {

const [display,setDisplay]=useState('')
const buttonName="chamalka"

  return (
    <>
    <h2>{display}</h2>
    <Button countToDisplay={(count) => setDisplay(count)} buttonName={buttonName} />
      
    </>
  )
}


export default App
