import React from "react";
import "./SingleProduct.css";
import net1 from "../../assets/net1.webp";
const SingleProduct = () => {
  return (
    <div className="product">
      <div className="productLeft">
        <img src={net1} alt="" className="productImage" />
      </div>
      <div className="productRight">
        <div className="productInfo">
          <h1 className="productTitle">Product Details</h1>
          <span className="productThikness">Thickness : </span>
          <span className="productSize">Size : </span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
