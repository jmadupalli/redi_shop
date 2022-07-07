import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../forms/loginForm";
import RegisterForm from "../forms/registerForm";
// reactstrap components
import "../styles/loginPage.scss";
import "../styles/loginFont.css";

function LoginPage(props) {
  return (
    <div className="login-page">
      <nav
        className="navbar navbar-expand-lg bg-white fixed-top navbar-transparent"
        color-on-scroll="500"
      >
        <div className="container">
          <div className="navbar-translate">
            <Link to="/" className="navbar-brand">
              &lt; Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="page-header" filter-color="orange">
        <div className="page-header-image"></div>
        <div className="content">
          <div className="container">
            <div className="col-md-5 ml-auto mr-auto">
              <div className="card card-login card-plain">
                <div className="card-header text-center">
                  <div className="logo-container">
                    <img src="img/logo-light.png" alt="" />
                  </div>
                </div>
                {props.form === "login" ? <LoginForm /> : <RegisterForm />}
              </div>
            </div>
          </div>
        </div>

        <footer className="footer ">
          <div className="social-links-warp" style={{ borderTop: "none" }}>
            <div className="container">
              <div className="social-links">
                <a href="/none" className="instagram">
                  <i className="fa fa-instagram"></i>
                  <span style={{ color: "#fff" }}>instagram</span>
                </a>
                <a href="/none" className="google-plus">
                  <i className="fa fa-google-plus"></i>
                  <span style={{ color: "#fff" }}>g+plus</span>
                </a>
                <a href="/none" className="pinterest">
                  <i className="fa fa-pinterest"></i>
                  <span style={{ color: "#fff" }}>pinterest</span>
                </a>
                <a href="/none" className="facebook">
                  <i className="fa fa-facebook"></i>
                  <span style={{ color: "#fff" }}>facebook</span>
                </a>
                <a href="/none" className="twitter">
                  <i className="fa fa-twitter"></i>
                  <span style={{ color: "#fff" }}>twitter</span>
                </a>
                <a href="/none" className="youtube">
                  <i className="fa fa-youtube"></i>
                  <span style={{ color: "#fff" }}>youtube</span>
                </a>
                <a href="/none" className="tumblr">
                  <i className="fa fa-tumblr-square"></i>
                  <span style={{ color: "#fff" }}>tumblr</span>
                </a>
              </div>
            </div>
            <div className="text-white m-4">
              <p className="float-left text-left d-inline-block">
                Navi Apparel &copy;&nbsp;
                {new Date().getFullYear()}
              </p>
              <p className="float-right text-right d-inline-block">
                Powered by REDI
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LoginPage;
