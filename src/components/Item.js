import React, { useState } from "react";

function Item({ name, category }) {
  // Create state to track if item is in cart
  const [inCart, setInCart] = useState(false);
  
  // Determine the item's class based on cart state
  const itemClass = inCart ? "in-cart" : "";
  
  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={toggleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;