import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import viteLogo from "/vite.svg";
import "../css/App.css";
import BurgerCard from "../components/BurgerCard";

function Menu() {
  const [count, setCount] = useState(0);
  const burgerArray = [
    {
      name: "Chesburgeer",
      price: "5$",
      description: "any descriptio here",
      image:
        "https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?w=1380&t=st=1685735691~exp=1685736291~hmac=521e797fa7e116e91aaa5735af0405f5960a21ac29f688d36962583e8bf38045",
    },
    {
      name: "Chesburger",
      price: "5$",
      description: "any descriptio here",
      image:
        "https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?w=1380&t=st=1685735691~exp=1685736291~hmac=521e797fa7e116e91aaa5735af0405f5960a21ac29f688d36962583e8bf38045",
    },
    {
      name: "Chesburger",
      price: "5$",
      description: "any descriptio here",
      image:
        "https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?w=1380&t=st=1685735691~exp=1685736291~hmac=521e797fa7e116e91aaa5735af0405f5960a21ac29f688d36962583e8bf38045",
    },
    {
      name: "Chesburger",
      price: "5$",
      description: "any descriptio here",
      image:
        "https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?w=1380&t=st=1685735691~exp=1685736291~hmac=521e797fa7e116e91aaa5735af0405f5960a21ac29f688d36962583e8bf38045",
    },
  ];

  const friesArray = [
    {
      name: "papa y tocineta",
      price: "2$",
      description: "any descriptio here",
      image:
        "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?size=626&ext=jpg&ga=GA1.1.861345041.1679603740&semt=sph",
    },
    {
      name: "papa blue chase",
      price: "5$",
      description: "any descriptio here",
      image:
        "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?size=626&ext=jpg&ga=GA1.1.861345041.1679603740&semt=sph",
    },
    {
      name: "papas trufadas",
      price: "5$",
      description: "any descriptio here",
      image:
        "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?size=626&ext=jpg&ga=GA1.1.861345041.1679603740&semt=sph",
    },
    {
      name: "papas normales",
      price: "5$",
      description: "any descriptio here",
      image:
        "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?size=626&ext=jpg&ga=GA1.1.861345041.1679603740&semt=sph",
    },
  ];

  return (
    <>
      <div className="bg-light">
        <h1 className="ms-5 pt-5">Burgers:</h1>
        <div className="d-flex justify-content-center">
        <div className="d-flex flex-wrap">
        {burgerArray.map((item) => {
          return <BurgerCard item={item} />;
        })}
  
        </div>
        </div>

        <h1 className="ms-5 mt-2">Fries:</h1>
        <div className="d-flex justify-content-center">
        <div className="d-flex flex-wrap">
        {friesArray.map((item) => {
          return <BurgerCard item={item} />;
        })}
        </div>
        </div>
       
      </div>
    </>
  );
}

export default Menu;
