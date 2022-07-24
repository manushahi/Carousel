import React, { useState } from "react";

const Product = ({ category, image, name, price, giftFor, priceRange, id, brand}) => {

    const [showMore, setShowMore] = useState(false)

    const handleMouseOver = () => {
        setShowMore(true)

    }
    const hanleMouseOut = () => {
        setShowMore(false)
    }

    const redirectToAmazon =()=>{
        window.location.href = "https://www.amazon.in/"
    }

    return (
        <div onMouseOver={handleMouseOver} onMouseOut={hanleMouseOut} className='product-list-item' id='product' style={{ height: 300, width: 250}}>
            <div className='product-list-image' ><img src={image} alt={name} height="100%" width="100%" /></div>
            <p className="product-list-name">{name}</p>
            <p className="product-list-name">${price}</p>
            <p className="product-list-name ">{brand}</p>
             <div className="show-more" onClick={redirectToAmazon}>

                <div><a href="https://www.amazon.in/" style={{color:'white', textDecoration:"none"}}>See More!</a> </div>
                <div style={{color:'white'}}>&#62;</div>
            </div>
        </div>
    )

}

export default Product;