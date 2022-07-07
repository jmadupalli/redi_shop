import React, { useEffect, useState } from "react";

import { callLogout } from "../components/backendApi";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [userObj, setUserObj] = useState(() => {
    const localUserObj = localStorage.getItem("userObj");
    return localUserObj ? JSON.parse(localUserObj) : {};
  });

  const login = (userObj) => {
    setUserObj(userObj);
  };

  const logout = async () => {
    setUserObj({});
    localStorage.removeItem("userObj");
    await callLogout();
  };

  const isAuthenticated = () => {
    console.log(userObj);
    if (userObj["expiry"] && userObj["expiry"] - 60000 > Date.now())
      return true;
    return false;
  };

  useEffect(() => {
    localStorage.setItem("userObj", JSON.stringify(userObj));
  }, [userObj]);

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated, userObj }}>
      {props.children}
    </AuthContext.Provider>
  );
};
