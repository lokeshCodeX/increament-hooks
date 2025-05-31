import { useState } from 'react'
import React from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  function add() {
    setCounter(counter + 1)
  }

  function sub() {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Start the counter project</h1>
      <h1>Result after operation: {counter}</h1>
      <button onClick={add}>Add by 1</button>
      <button onClick={sub}>Subtract by 1</button>
    </>
  )
}

export default App
