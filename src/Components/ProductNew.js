import React, { useState } from "react";
import Product from "./Product";
import './product.css'

const ProductNew = ({
  category,
  image,
  name,
  price,
  giftFor,
  priceRange,
  id,
  brand,
}) => {
  const [showMore, setShowMore] = useState(false);

  const handleMouseOver = () => {
    setShowMore(true);
  };
  const handleMouseOut = () => {
    setShowMore(false);
  };

  return (
    <div key={id} className="image-box" onMouseOver ={handleMouseOver} onMouseOut={handleMouseOut}>
      <div style={{ height: "100px", width: "50px" }}>
        <img src={image} width="100%" height="100%" />
      </div>
      <p
        style={{
          fontSize: 10,
          color: "black",
          textAlign: "left",
          float: "left",
        }}
      >
        {name}
      </p>
      <p
        style={{
          fontSize: 10,
          color: "black",
          textAlign: "left",
          float: "left",
        }}
      >
        ${price}
      </p>
      {
          showMore && <Product 
          name ={name}
          image={image}
          price={price}
          brand ={brand}
          />
      }
    </div>
  );
};

export default ProductNew;
