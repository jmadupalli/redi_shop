import React, { useState, useContext } from "react";
import { Alert, Form, Input, Button } from "reactstrap";
import { Link, Navigate } from "react-router-dom";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { callLogin } from "../backendApi";

import { AuthContext } from "../../contexts/authContext";

export default function LoginForm() {
  const { login, isAuthenticated } = useContext(AuthContext);
  const isLoggedIn = isAuthenticated();
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [useEmail, setUseEmail] = useState(false);
  const [alerts, setAlerts] = useState({
    visible: false,
    color: "danger",
    messages: [],
  });
  const isValidEmail = (email) => {
    //eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const alertMessages = [];

    if (!useEmail && !isValidPhoneNumber(phoneOrEmail))
      alertMessages.push("Invalid Phone, Please try again.");
    if (useEmail && !isValidEmail(String(phoneOrEmail).toLowerCase()))
      alertMessages.push("Invalid Email, Please try again.");
    if (alertMessages.length > 0)
      setAlerts({ visible: true, color: "danger", messages: alertMessages });
    else {
      setAlerts({ visible: false, color: "", messages: [] });
      const userData = await callLogin({
        username: phoneOrEmail,
        password: data.get("password"),
      }).catch((error) => {
        const messages = [];
        messages.push('There seems to be a problem, Its not you, its us.. Please try again later.');
        if (error['response'] && error['response']['data']) {
          messages.pop();
          Object.keys(error.response.data).forEach((key) => {
            error.response.data[key].forEach((message) =>
              messages.push(message)
            );
          });
        }
        setAlerts({ visible: true, color: "danger", messages });

      });
      if (userData) {
        login(userData.data);
        setAlerts({
          visible: true,
          color: "success",
          messages: ["Login Successful, You will be redirected soon."],
        });
      }
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <Form className="form" onSubmit={handleLoginSubmit}>
          <Alert color={alerts.color} isOpen={alerts.visible}>
            <ul style={{ textAlign: "left", fontSize: "13px" }}>
              {alerts.messages.map((message, i) => (
                <li key={i}>{message}</li>
              ))}
            </ul>
          </Alert>
          <div className="card-body">
            <div className="input-group form-group-no-border input-lg">
              {useEmail ? (
                <Input
                  name="phoneOrEmail"
                  type="text"
                  className="form-control"
                  placeholder="Email..."
                  onChange={(event) => setPhoneOrEmail(event.target.value)}
                />
              ) : (
                <PhoneInput
                  name="phoneOrEmail"
                  className="form-control phoneNumberInput"
                  placeholder="Phone Number..."
                  defaultCountry="IN"
                  value={phoneOrEmail}
                  onChange={setPhoneOrEmail}
                />
              )}
            </div>
            <div
              className="pull-right"
              style={{
                paddingRight: "10px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
              onClick={() => setUseEmail(!useEmail)}
            >
              <h6>
                <span className="link footer-link">
                  {useEmail ? "Use Phone" : "Use Email"}
                </span>
              </h6>
            </div>
            <div className="input-group form-group-no-border input-lg">
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Password..."
              />
            </div>
          </div>
          <div className="card-footer text-center">
            <Button
              type="submit"
              className="btn btn-primary btn-round btn-lg btn-block"
            >
              Login
            </Button>
          </div>
          <div className="pull-left">
            <h6>
              <Link className="link footer-link" to="/register">
                Create Account
              </Link>
            </h6>
          </div>

          <div className="pull-right">
            <h6>
              <a href="#pablo" className="link footer-link">
                Need Help?
              </a>
            </h6>
          </div>
        </Form>
      )}
    </>
  );
}
