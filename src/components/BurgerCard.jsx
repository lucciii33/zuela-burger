import { useState } from "react";
import burgerHome2 from "../assets/burgerHome2.png";
import burger3 from "../assets/burger3.png";
import "../css/menu.css"
function BurgerCard({item}) {

  const [color, setColor]=useState("blue")
  const changeColor = () => {
    // Function to change the color when the button is clicked
    setColor("red"); // Change the color to 'secondary' (you can set any color class you want)
  };

  return (
    <>
      <div className="m-5" test-id="burger-component-header">
        
                <div class="card burger-card">
                <img src={item.image} class="card-img-top" alt="" />
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-text">
                   {item.description}
                  </p>
                  <p class="card-text">
                   {item.price}
                  </p>
                  <a href="#" class={color === "blue" ? "blue" : "red"} onClick={changeColor} test-data="buttonColorChange">
                   Add to cart
                  </a>
                </div>
              </div>
         
       
      </div>
    </>
  );
}

export default BurgerCard;
