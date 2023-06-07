import { useState } from "react";

import burger4 from "../assets/burger4.png";
import burgerHome2 from "../assets/burgerHome2.png"
function Homepage3() {
  return (
    <>
      <div className="container-3 pt-5 d-flex justify-content-center align-items-center p-5">
        <div className="pt-5 pb-5">
          <div className="row p-2">
            <div className=" col-md-7 col-sm-12 ps-5 mt-5 order-md-1 order-2">
              <p className=" text-break text-white max-w mt-4">
                En este pequeño rincón gastronómico, te espera una experiencia
                única que te hará viajar por sabores inigualables. Aunque pueda
                parecer sorprendente, nuestra magia se encuentra en la
                simplicidad, ya que ofrecemos solo cuatro tipos de hamburguesas,
                pero cada una de ellas es una verdadera obra maestra culinaria.
              </p>
              <p className=" text-break  text-white max-w mt-4">
                En Blue Burger, no solo nos enfocamos en la calidad de nuestros
                ingredientes, sino que también nos aseguramos de crear una
                atmósfera acogedora y única. Nuestro espacio está decorado con
                un estilo moderno y vibrante, ideal para disfrutar de una
                deliciosa hamburguesa junto a amigos y familiares.
              </p>
            </div>

            <div className=" col-md-5 col-sm-12 order-md-2 order-1 flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={burger4}
                    className="burgerHome-2 p-3"
                    alt="Burger"
                  />
                </div>
                <div className="flip-card-back">
                <img
                    src={burgerHome2}
                    className="burgerHome-2 p-3"
                    alt="Burger"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage3;

<div className="flip-card-inner">
  <div className="flip-card-front">
    <h1 className="title-size nunito">
      Ponencias <br />
      Colaboraciones
    </h1>
  </div>
  <div className="flip-card-back">
    <p className="px-5 text-white text-size-home nunito">
      ¿Necesitas apoyo en tu organización? Escríbenos y con gusto podemos
      ayudarte.
    </p>
  </div>
</div>;
