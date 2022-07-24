import React, { useState } from "react";
import { LEFT_ARROW, RIGHT_ARROW } from "../assets/images";
import "./product.css";
import ProductNew from "./ProductNew";

const ProductListNew = ({ products }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleFetch = (source) => {
    setLoading(true);
    setTimeout(() => {
      setCount((state) => {
        let current = state;
        if (source === "prev") {
          current -= 1;
        }
        if (source === "next") {
          current += 1;
        }
        return current;
      });
      setLoading(false);
    }, 300);
  };

  return (
    <div className="wrapper">
      <div className="arrow left-arrow">
        <img
          src={LEFT_ARROW}
          alt="left_arrow"
          onClick={() => handleFetch("prev")}
        />
      </div>

      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="image-gallery">
          {products.slice(30 * count, 30 * (count + 1)).map((item) => (
            <ProductNew
              name={item.title}
              price={item.price}
              image={item.thumbnail}
              brand={item.brand}
            />
          ))}
        </div>
      )}

      <div className="arrow right-arrow">
        <img
          src={RIGHT_ARROW}
          alt="right_arrow"
          onClick={() => handleFetch("next")}
        />
      </div>
    </div>
  );
};
export default ProductListNew;
