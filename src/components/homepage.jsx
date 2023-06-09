import { useState } from "react";
import burgerHome from "../assets/burgerHome.png"

function Homepage() {
  return (
    <>
      <div className="container-1 pt-5 d-flex justify-content-center align-items-center">
       <div className="">
        <div className="row p-5">

        <div className=" col-md-7 col-sm-12 mt-5">
            <h1 class="text-start  text-white mt-5">
                Bienvenidos a Blue burger
            </h1>
            <p class="text-start text-break  text-white max-w mt-4">¡Descubre Blue Burger, la revolución de las hamburguesas! Nuestras Smash Burgers te harán estallar de sabor. ¡Ven y disfruta de lo mejor en hamburguesas!</p>
            <button type="button" class="btn btn-outline-light me-4 mt-4">VER MENU</button>
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
