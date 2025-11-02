import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import components
import MainBody from './components/MainBody.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainBody />
    </>
  )
}

export default App
