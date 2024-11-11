import React, { useState } from 'react'
import MyCompo from './MyCompo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MyCompo></MyCompo>
    </>
  )
}

export default App
