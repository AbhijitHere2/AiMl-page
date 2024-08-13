import { useState } from 'react'
import Aiml from './components/AiMl/AiMl'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Aiml/>
    </>
  )
}

export default App
