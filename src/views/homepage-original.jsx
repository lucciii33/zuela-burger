import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import viteLogo from '/vite.svg'
import "../css/App.css"
import Homepage from '../components/homepage'
import Homepage2 from '../components/Homepage-Banner2'
import Homepage3 from '../components/Homepage-Banner3'

function HomePageOriginal() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Homepage/>
        <Homepage2/>
        <Homepage3/>
      </div>
       
      
    </>
  )
}

export default HomePageOriginal