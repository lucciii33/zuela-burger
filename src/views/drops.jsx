import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import viteLogo from "/vite.svg";
import "../css/App.css";

function Drops() {
  

  return (
    <>
      <div className="bg-light">
       <h1>DROPS</h1>
       <div >
       <a href="https://www.wikipedia.org/" test-data="atag">VISIT NEW DROP</a>
       </div>

       <div >
       <a href="https://www.google.com/" test-data="google">VISIT google</a>
       </div>

       <div>
       <select class="custom-select" id="selectCustome">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
  </select>
       </div>
      </div>
    </>
  );
}

export default Drops;
