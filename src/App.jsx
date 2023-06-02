import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import viteLogo from '/vite.svg'
import "../src/css/App.css"
import Homepage from './components/homepage'
import Homepage2 from './components/Homepage-Banner2'
import Navbar from './components/Navbar'
import HomePageOriginal from "./views/homepage-original"
import Menu from './views/menu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <HomePageOriginal/> } />
        <Route path='/Menu' element={<Menu/>} />
      </Routes>

      </div>
       
      
    </>
  )
}

export default App
