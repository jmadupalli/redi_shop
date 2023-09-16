import React, { Suspense, lazy } from "react";
import { render } from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { CartProvider } from "./contexts/cartContext";
import { AuthProvider } from "./contexts/authContext";

import Loader from "./components/utils/loader";

const HomePage = lazy(() => import("./components/layouts/homePage"));
const ProductPage = lazy(() => import("./components/layouts/productPage"));
const CartPage = lazy(() => import("./components/layouts/cartPage"));
const LoginPage = lazy(() => import("./components/layouts/loginPage"));
const Logout = lazy(() => import("./components/logout"));

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/product" element={<ProductPage />} />
              <Route exact path="/cart" element={<CartPage />} />
              <Route exact path="/login" element={<LoginPage form="login" />} />
              <Route exact path="/register" element={<LoginPage form="register" />} />
              <Route exact path="/logout" element={<Logout />} />
              <Route exact path="/" element={<HomePage />} />
            </Routes>
          </Suspense>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

render(<BrowserRouter>
  <App /></BrowserRouter>, document.getElementById("root"));
