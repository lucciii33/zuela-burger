import { useState } from "react";
import burgerHome2 from "../assets/burgerHome2.png"
import burger3 from "../assets/burger3.png"
function Homepage2() {
  return (
    <>
      <div className="container-2 pt-5 d-flex justify-content-center align-items-center p-5">
       <div className="pt-5 pb-5">
        <div className="row p-2">

        <div className="col-md-5 col-sm-12 oval d-flex justify-content-center align-items-center">
            <img src={burger3} className="burgerHome-2 p-3"></img>
        </div>

        <div className=" col-md-7 col-sm-12 ps-5">
            <p className=" text-break  max-w mt-4">Estamos aquí para revolucionar el mundo de las hamburguesas con nuestras irresistibles Smash Burgers. ¿Qué son las Smash Burgers? Son hamburguesas hechas a mano con carne jugosa y sabrosa que se aplasta contra la parrilla caliente para lograr una costra caramelizada perfecta. El resultado es una explosión de sabor en cada bocado.</p>
            <p className=" text-break  max-w mt-4">Ven y descubre por qué nuestras Smash Burgers están causando sensación. En Blue Burger, estamos comprometidos a brindarte una experiencia gastronómica excepcional en un ambiente acogedor y amigable. ¡Te esperamos con los brazos abiertos para que disfrutes de las mejores hamburguesas de la ciudad!</p>
        </div>
       


       </div>
       </div>

       
      </div>
    </>
  );
}

export default Homepage2;