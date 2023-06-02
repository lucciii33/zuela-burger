import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from '../App.jsx'
import App from "../src/App"
// import '../css/index.css'
import "../src/css/index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
