import React, { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

function Product(props) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="product-item">
      <div className="pi-pic">
        <img src={props.imageURL} alt="" />
        <div className="pi-links">
          {cart.hasOwnProperty(props.productId) ? (
            <div
              className="add-card added-card"
              onClick={() => {
                removeFromCart(props.productId);
              }}
            >
              <i className="fa fa-check"></i>
              <span>Added</span>
            </div>
          ) : (
            <div
              className="add-card"
              onClick={() => {
                addToCart(props.productId, {
                  productId: props.productId,
                  productName: props.productName,
                  imageURL: props.imageURL,
                  price: props.price,
                  quantity: 1,
                });
              }}
            >
              <i className="flaticon-bag"></i>
              <span>&nbsp;ADD</span>
            </div>
          )}
          <div className="wishlist-btn">
            <i className="flaticon-heart"></i>
          </div>
        </div>
      </div>
      <div className="pi-text">
        <h6>&#8377;{props.price}</h6>
        <p>{props.productName}</p>
      </div>
    </div>
  );
}

export default Product;
