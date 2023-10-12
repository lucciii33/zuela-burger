import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import viteLogo from '/vite.svg'
import "../src/css/App.css"
import Homepage from './components/homepage'
import Homepage2 from './components/Homepage-Banner2'
import Navbar from './components/Navbar'
import HomePageOriginal from "./views/homepage-original"
import Menu from './views/menu'
import About from './views/about'
import Login from './views/login'
import Login2 from './views/login2'
import Drops from './views/drops'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <HomePageOriginal/> } />
        <Route path="/drops" element={ <Drops/> } />
        <Route path='/Menu' element={<Menu/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/login2' element={<Login2/>} />
      </Routes>

      </div>
    </>
  )
}

export default App
