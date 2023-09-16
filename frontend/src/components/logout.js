import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../contexts/authContext";
import "./styles/loginPage.scss";

function Logout() {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const [isLoggedOut, setLoggedOut] = useState(!isAuthenticated());
  useEffect(() => {
    (async () => {
      await logout();
      setLoggedOut(true);
    })();
  });
  return isLoggedOut ? (
    <Navigate to="/" />
  ) : (
    <div className="login-page page-header" filter-color="orange">
      <div
        style={{
          width: "100%",
          textAlign: "center",
          top: "48%",
          position: "absolute",
          color: "#ffffff",
          fontSize: "22px",
        }}
      >
        {" "}
        Logging out...
      </div>
    </div>
  );
}

export default Logout;
