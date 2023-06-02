import { useState } from "react";
import burgerHome from "../assets/burgerHome.png"
import "../css/navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="">
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link to="/" className="text-decoration-none"><a class="navbar-brand" href="#">BLUEBURGER</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">QUIENES SOMOS</a>
        </li>
        <li class="nav-item">
          <Link to="/menu" className="text-decoration-none"><a class="nav-link" href="#">MENU</a></Link>
        </li>
        
        <li class="nav-item">
          <a class="nav-link ">ORDENAR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">REGISTER</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link ">INICIAR</a>
        </li>
      </ul>
      <div class="d-flex circular-cart justify-content-center align-items-center text-white" role="search">
       
        <i class="fas fa-cart-plus  me-1"></i>
      <h5 className="mt-2">5</h5>
       
    
    
      </div>
    </div>
  </div>
</nav>
       
       
      </div>
    </>
  );
}

export default Navbar;