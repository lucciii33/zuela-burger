import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './components/homepage'
import Homepage2 from './components/Homepage-Banner2'
import Navbar from './components/Navbar'
import Homepage3 from './components/Homepage-Banner3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Homepage/>
        <Homepage2/>
        <Homepage3/>
      </div>
       
      
    </>
  )
}

export default App
