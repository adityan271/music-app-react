import React, { createContext, useState } from "react";

export const Auth = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState("");

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

  const loginUser = (email, password) => {
    const user = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExist = users.find((user) => {
      return user.email === email && user.password === password;
    });

    if (!alreadyExist)
      return {
        success: false,
        message: "invalid email and pssword ",
      };

    setUser(alreadyExist);

    localStorage.setItem("currentUser", JSON.stringify(user));

    return {
      success: true,
      message: "user logged in successfully ",
    };
  };

  return <Auth.Provider value={registerUser}>{children}</Auth.Provider>;
};

export default AuthContext;
