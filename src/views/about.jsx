import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "../css/aboutUs.css";


function About() {
 

  return (
    <>
      <div className="bg-light">
      <div className="image-with-text">
      <img src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/1440/810/istock-174878962-12379.jpg?ve=1&tl=1" alt="Example Image" className="image-about"/>
      <p>"Blue Burger, el hogar de las hamburguesas perfectas: crujientes por fuera, jugosas por dentro."</p>
    </div>

    <div className="line-text"></div>
    <div className="p-4">
        <h1 className="text-center pb-3">NUESTRA HISTORIA</h1>
        <p className="text-center px-controller">Bienvenidos a Blue Burger, el lugar donde los amantes de las hamburguesas encuentran su paraíso culinario. En Blue Burger, nos apasiona crear experiencias gastronómicas únicas y satisfacer los paladares más exigentes.</p>
        <p className="text-center px-controller">Nuestro enfoque se centra en las smash burgers, una técnica que consiste en aplastar la carne fresca de primera calidad sobre la plancha caliente, sellando los jugos y creando una textura crujiente en el exterior, mientras se mantiene jugosa y llena de sabor en el interior. Cada una de nuestras hamburguesas es cuidadosamente elaborada a mano, utilizando ingredientes frescos y seleccionados con esmero.</p>
        <p className="text-center px-controller">En Blue Burger, creemos en la importancia de la calidad y el sabor. Nos esforzamos por utilizar ingredientes de origen local siempre que sea posible, apoyando a los agricultores y productores locales y asegurando que cada bocado sea una experiencia deliciosa y auténtica.</p>
    </div>
       
        
       
      </div>
    </>
  );
}

export default About;