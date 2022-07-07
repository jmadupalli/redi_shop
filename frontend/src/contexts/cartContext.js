import React, { useEffect, useReducer } from "react";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const cartReducer = (cart, action) => {
    switch (action.type) {
      case "setCart":
        return { ...action.localCart };
      case "addToCart":
        return { ...cart, ...{ [action.productId]: action.productObj } };
      case "removeFromCart":
        delete cart[action.productId];
        return { ...cart };
      case "updateQuantity":
        action.increment
          ? (cart[action.productId].quantity += 1)
          : (cart[action.productId].quantity -= 1);
        return { ...cart };
      default:
        return { ...cart };
    }
  };

  const [cart, cartDispatch] = useReducer(cartReducer, {});

  const addToCart = (productId, productObj) => {
    cartDispatch({ type: "addToCart", productId, productObj });
  };

  const removeFromCart = (productId) => {
    cartDispatch({ type: "removeFromCart", productId });
  };

  const updateQuantity = (productId, increment) => {
    cartDispatch({ type: "updateQuantity", productId, increment });
  };

  const cartCount = () => {
    return Object.keys(cart).length;
  };

  useEffect(() => {
    let localCart = localStorage.getItem("rediCart");
    localCart = JSON.parse(localCart);
    console.log("local cart", localCart);
    if (localCart) cartDispatch({ type: "setCart", localCart });
  }, []);

  useEffect(() => {
    localStorage.setItem("rediCart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, cartCount }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
