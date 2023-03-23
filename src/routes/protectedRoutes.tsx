import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const Protectedroutes = ({ component }) => {
  // const loggedIn = useSelector((state: Boolean) => state.currentUser.loggedIn);

  const loggedIn = true

  return loggedIn ? component : <Navigate to="/login" />;
};

export default Protectedroutes;
