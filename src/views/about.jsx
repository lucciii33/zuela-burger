import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "../css/aboutUs.css";



function About() {

  const [data, setData] = useState([])

  const fetchGet = async() => {
    const url = 'https://exerciseapi3.p.rapidapi.com/exercise/name/push%20up';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cac0ff8c40msh8d6b13eceeb7d54p149d44jsn09a410dae8d1',
		'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.exercises);
  setData(result.exercises)
} catch (error) {
	console.error(error);
}
  }

  useEffect(()=>{
    fetchGet()
  },[])
  console.log("data", data)

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
        <p className="text-center px-controller" test-data="historia1">Bienvenidos a Blue Burger, el lugar donde los amantes de las hamburguesas encuentran su paraíso culinario. En Blue Burger, nos apasiona crear experiencias gastronómicas únicas y satisfacer los paladares más exigentes.</p>
        <p className="text-center px-controller">Nuestro enfoque se centra en las smash burgers, una técnica que consiste en aplastar la carne fresca de primera calidad sobre la plancha caliente, sellando los jugos y creando una textura crujiente en el exterior, mientras se mantiene jugosa y llena de sabor en el interior. Cada una de nuestras hamburguesas es cuidadosamente elaborada a mano, utilizando ingredientes frescos y seleccionados con esmero.</p>
        <p className="text-center px-controller">En Blue Burger, creemos en la importancia de la calidad y el sabor. Nos esforzamos por utilizar ingredientes de origen local siempre que sea posible, apoyando a los agricultores y productores locales y asegurando que cada bocado sea una experiencia deliciosa y auténtica.</p>
    </div>

  

    {data.map((item) => {
  return <p key={item.id} test-data="mapfecth">{item.equipment}</p>;
})}
       
        
       
      </div>
    </>
  );
}

export default About;