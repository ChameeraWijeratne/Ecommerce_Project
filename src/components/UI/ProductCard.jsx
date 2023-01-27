import React from "react";
import productImg from "../../assets/images"

const ProductCard = () => {
    return (<div className="product_item">
        <div className="product_img">
            <img src={productImg} alt=""/>
        </div>
    </div>
    )
};

export default ProductCard;
