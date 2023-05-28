import { useState } from "react";
import burgerHome2 from "../assets/burgerHome2.png"
import burger4 from "../assets/burger4.png"
function Homepage3() {
  return (
    <>
      <div className="container-3 pt-5 d-flex justify-content-center align-items-center p-5">
       <div className="pt-5 pb-5">
        <div className="row p-2">

        

        <div className=" col-md-7 col-sm-12 ps-5 mt-5">
            <p className=" text-break text-white max-w mt-4">En este pequeño rincón gastronómico, te espera una experiencia única que te hará viajar por sabores inigualables. Aunque pueda parecer sorprendente, nuestra magia se encuentra en la simplicidad, ya que ofrecemos solo cuatro tipos de hamburguesas, pero cada una de ellas es una verdadera obra maestra culinaria.</p>
            <p className=" text-break  text-white max-w mt-4">En Blue Burger, no solo nos enfocamos en la calidad de nuestros ingredientes, sino que también nos aseguramos de crear una atmósfera acogedora y única. Nuestro espacio está decorado con un estilo moderno y vibrante, ideal para disfrutar de una deliciosa hamburguesa junto a amigos y familiares.</p>
        </div>
       
        <div className="col-md-5 col-sm-12 oval-2 d-flex justify-content-center align-items-center">
            <img src={burger4} className="burgerHome-2 p-3"></img>
        </div>


       </div>
       </div>

       
      </div>
    </>
  );
}

export default Homepage3;