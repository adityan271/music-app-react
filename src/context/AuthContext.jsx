import React, { createContext } from "react";

export const Auth = createContext();

 const AuthContext = ({ children }) => {
  const registerUser = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExist = users.find((user) => {
      return user.email === newUser.email;
    });
    if (alreadyExist) {
      return {
        success: false,
        Message: "User already exists",
      };
    }

    const updateUser = [...users, newUser];

    localStorage.setItem("users", JSON.stringify(updateUser));

    return {
      success: true,
      Message: "User created successfully",
    };
  };

  return (
  <Auth.Provider value={registerUser}>
    {children}
  </Auth.Provider>
  );
};

export default AuthContext;
