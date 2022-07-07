import React, { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import Header from "../header";
import Footer from "../footer";

function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const cartTotal = () =>
    Object.values(cart).reduce(
      (totPrice, { quantity, price }) => totPrice + quantity * price,
      0
    );
  const CartProduct = (props) => {
    const product = props.product;
    return (
      <tr>
        <td className="product-col">
          <img src={product.imageURL} alt="" />
          <div className="pc-title">
            <h4>{product.productName}</h4>
            <p>&#8377;{product.price}</p>
          </div>
        </td>
        <td className="quy-col">
          <div className="quantity">
            <div className="pro-qty">
              <span
                className="dec qtybtn"
                onClick={() =>
                  product.quantity > 1
                    ? updateQuantity(product.productId, false)
                    : removeFromCart(product.productId)
                }
              >
                -
              </span>
              <input type="text" value={product.quantity} disabled />
              <span
                className="inc qtybtn"
                onClick={() => updateQuantity(product.productId, true)}
              >
                +
              </span>
            </div>
          </div>
        </td>
        <td className="size-col">
          <h4>Size M</h4>
        </td>
        <td className="total-col">
          <h4>&#8377;{product.price * product.quantity}</h4>
        </td>
      </tr>
    );
  };
  return (
    <>
      <Header />
      <div className="page-top-info">
        <div className="container">
          <h4>Your cart</h4>
          <div className="site-pagination">
            <a href="/none">Home</a> / <a href="/none">Your cart</a>
          </div>
        </div>
      </div>

      <section className="cart-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-table">
                <h3>Your Cart</h3>
                <div className="cart-table-warp">
                  <table>
                    <thead>
                      <tr>
                        <th className="product-th">Product</th>
                        <th className="quy-th">Quantity</th>
                        <th className="size-th">SizeSize</th>
                        <th className="total-th">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(cart).length > 0 ? (
                        Object.keys(cart).map((key) => {
                          return <CartProduct key={key} product={cart[key]} />;
                        })
                      ) : (
                        <tr>
                          <td colSpan="4" className="text-center">
                            {" "}
                            No items in your cart.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="total-cost">
                  <h6>
                    Total <span>&#8377;{cartTotal()}</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 card-right">
              <form className="promo-code-form">
                <input type="text" placeholder="Enter promo code" />
                <button>Submit</button>
              </form>
              <a href="/none" className="site-btn">
                Proceed to checkout
              </a>
              <a href="/none" className="site-btn sb-dark">
                Continue shopping
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CartPage;
