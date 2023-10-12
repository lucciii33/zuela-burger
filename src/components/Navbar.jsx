import { useState } from "react";
import burgerHome from "../assets/burgerHome.png"
import "../css/navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="">
      <nav class="navbar navbar-expand-lg bg-light" test-data="linkToAbout">
  <div class="container-fluid">
    <Link to="/" className="text-decoration-none"><a class="navbar-brand" href="#">BLUEBURGER</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" >
          <Link to="/about" className="text-decoration-none"><a class="nav-link active" aria-current="page" href="#" test-datatype="actualLink">QUIENES SOMOS</a></Link>
        </li>
        <li class="nav-item">
          <Link to="/menu" className="text-decoration-none"><a class="nav-link" href="#">MENU</a></Link>
        </li>
        
        <li class="nav-item">
          <a class="nav-link ">ORDENAR</a>
        </li>
        <Link to="/Login" test-datatype="register">
        <li class="nav-item">
          <a class="nav-link" href="#">REGISTER</a>
        </li>
        </Link>
        
        <li class="nav-item">
          <a class="nav-link ">INICIAR</a>
        </li>

        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <Link to="/drops" test-data="dropsLink"><li><a class="dropdown-item" href="#">Action</a></li></Link>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
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