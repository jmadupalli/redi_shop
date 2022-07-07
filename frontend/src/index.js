import React, { Suspense, lazy } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Router>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route path="/product">
                  <ProductPage />
                </Route>
                <Route exact path="/cart">
                  <CartPage />
                </Route>
                <Route exact path="/login">
                  <LoginPage form="login" />
                </Route>
                <Route exact path="/register">
                  <LoginPage form="register" />
                </Route>
                <Route exact path="/logout">
                  <Logout />
                </Route>
                <Route exact path="/">
                  <HomePage />
                </Route>
              </Switch>
            </Suspense>
          </Router>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

render(<App />, document.getElementById("root"));
