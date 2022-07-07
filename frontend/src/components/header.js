import React, { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { AuthContext } from "../contexts/authContext";
function Header() {
  const { cartCount } = useContext(CartContext);
  const { userObj, isAuthenticated } = useContext(AuthContext);
  const isLoggedIn = isAuthenticated();
  return (
    <header className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 text-center text-lg-left">
              <a href="/" className="site-logo">
                <img className="w-50 d-lg-none" src="img/logo.png" alt="" />
                <img className="d-none d-lg-block" src="img/logo.png" alt="" />
              </a>
            </div>
            <div className="col-xl-6 col-lg-5">
              <form className="header-search-form">
                <input type="text" placeholder="Search on divisima ...." />
                <button>
                  <i className="flaticon-search"></i>
                </button>
              </form>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="user-panel">
                <div className="up-item">
                  <i className="flaticon-profile"></i>
                  {isLoggedIn ? (
                    <>
                      {" "}
                      Hi {userObj.user.name + ", "}
                      <a href="/logout">logout</a>
                    </>
                  ) : (
                    <>
                      <a href="/login"> Sign In</a> or{" "}
                      <a href="/register">Create Account</a>
                    </>
                  )}
                </div>
                <div className="up-item">
                  <div className="shopping-card">
                    <i className="flaticon-bag"></i>
                    <span>{cartCount()}</span>
                  </div>
                  <a href="/cart"> Shopping Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark">
        <button
          className="navbar-toggler ml-auto float-xs-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <i className="fa fa-bars" aria-hidden="true"></i> Menu
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/women">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/men">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/jewels">
                Jewelry
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="./product.html">
                  Product Page
                </a>
                <a className="dropdown-item" href="./category.html">
                  Category Page
                </a>
                <a className="dropdown-item" href="./cart.html">
                  Cart Page
                </a>
                <a className="dropdown-item" href="./checkout.html">
                  Checkout Page
                </a>
                <a className="dropdown-item" href="./contact.html">
                  Contact Page
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;
