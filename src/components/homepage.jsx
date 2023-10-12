import { useState } from "react";
import burgerHome from "../assets/burgerHome.png"
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div className="container-1 pt-5 d-flex justify-content-center align-items-center">
       <div className="">
        <div className="row p-5">

        <div className=" col-md-7 col-sm-12 mt-5" data-test="parentDiv">
            <h1 class="text-start  text-white mt-5" data-test="homepage-1">
                Bienvenidos a Blue burger
            </h1>
            <p class="text-start text-break  text-white max-w mt-4" data-test="homepage-2">¡Descubre Blue Burger, la revolución de las hamburguesas! Nuestras Smash Burgers te harán estallar de sabor. ¡Ven y disfruta de lo mejor en hamburguesas!</p>
           <Link to="/Menu"> <button type="button" class="btn btn-outline-light me-4 mt-4" data-test="verMenu">VER MENU</button></Link>
            <button type="button" class="btn btn-outline-light mt-4">ORDENAR</button>
        </div>
        <div className="col-md-5 col-sm-12 mb-3">
            <img src={burgerHome} className="burgerHome"></img>
        </div>


       </div>
       </div>

       
      </div>
    </>
  );
}

export default Homepage;
