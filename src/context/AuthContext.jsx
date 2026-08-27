import React, { createContext } from "react";

export const AuthContextData = createContext();

const AuthContext = ({ children }) => {
  return <AuthContextData.Provider>{children}</AuthContextData.Provider>;
};

export default AuthContext;
