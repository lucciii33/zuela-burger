import { useState } from "react";
import burgerHome2 from "../assets/burgerHome2.png";
import burger3 from "../assets/burger3.png";
import "../css/menu.css"
function BurgerCard({item}) {

  return (
    <>
      <div className="m-5">
        
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
                  <a href="#" class="btn btn-primary">
                   Add to cart
                  </a>
                </div>
              </div>
         
       
      </div>
    </>
  );
}

export default BurgerCard;
