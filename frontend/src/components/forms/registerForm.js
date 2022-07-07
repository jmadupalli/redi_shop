import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Form, Input, Button } from "reactstrap";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { registerUser } from "../backendApi";

export default function RegisterForm() {
  const [phone, setPhone] = useState("");
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

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const alertMessages = [];
    if (data.get("password").length < 8)
      alertMessages.push("Password should contain atleast 8 characters.");
    if (data.get("name").length < 3)
      alertMessages.push("Invalid Name, Please try again.");
    if (!isValidPhoneNumber(phone))
      alertMessages.push("Invalid Phone, Please try again.");
    if (
      data.get("email").length > 0 &&
      !isValidEmail(String(data.get("email")).toLowerCase())
    )
      alertMessages.push("Invalid Email, Please try again.");
    if (alertMessages.length > 0)
      setAlerts({ visible: true, color: "danger", messages: alertMessages });
    else {
      setAlerts({ visible: false, color: "", messages: [] });
      const response = await registerUser({
        name: data.get("name"),
        email: data.get("email") ? data.get("email") : null,
        phone,
        password: data.get("password"),
      }).catch((error) => {
        if (error.response.data) {
          const messages = [];
          Object.keys(error.response.data).forEach((key) => {
            error.response.data[key].forEach((message) =>
              messages.push(message)
            );
          });
          setAlerts({ visible: true, color: "danger", messages });
        }
      });
      if (response) {
        setAlerts({
          visible: true,
          color: "success",
          messages: ["Registration Successful, You may login now."],
        });
      }
    }
  };

  return (
    <Form className="form" onSubmit={handleRegisterSubmit}>
      <Alert color={alerts.color} isOpen={alerts.visible}>
        <ul
          style={{
            textAlign: "left",
            textTransform: "capitalize",
            fontSize: "13px",
          }}
        >
          {alerts.messages.map((message, i) => (
            <li key={i}>{message}</li>
          ))}
        </ul>
      </Alert>
      <div className="card-body">
        <div className="input-group form-group-no-border input-lg">
          <Input
            name="name"
            type="text"
            className="form-control"
            placeholder="Your Name..."
          />
        </div>
        <div className="input-group form-group-no-border input-lg">
          <PhoneInput
            name="phone"
            className="form-control phoneNumberInput"
            placeholder="Phone Number..."
            defaultCountry="IN"
            value={phone}
            onChange={setPhone}
          />
        </div>
        <div className="input-group form-group-no-border input-lg">
          <Input
            name="email"
            type="email"
            className="form-control"
            placeholder="Email (optional)..."
          />
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
      <div className="card-footer text-center" style={{ marginTop: "-35px" }}>
        <Button
          type="submit"
          className="btn btn-primary btn-round btn-lg btn-block"
        >
          Register
        </Button>
      </div>
      <div className="text-center">
        <h6 className="link footer-link">
          Already have an account? &nbsp;
          <Link className="link footer-link" to="/login">
            <span style={{ color: "#000000" }}>Sign In ></span>
          </Link>
        </h6>
      </div>
    </Form>
  );
}
