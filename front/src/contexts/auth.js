import { createContext, useEffect, useState } from "react";
import { UserLogin, UserRegister } from "../service/user";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("user_token"));
    if (userToken) {
      signin(userToken.email, userToken.pass);
    }
  }, []);

  const signin = async (email, pass) => {
    let userObject = {
      email,
      pass,
    };

    const result = await UserLogin(userObject);

    if (result["status"] === true) {
      localStorage.setItem("user_token", JSON.stringify(userObject));
      setUser(userObject);
    } else {
      return result["message"];
    }
  };

  const signup = async (username, email, pass) => {
    let userObject = {
      username,
      email,
      pass,
    };

    const result = await UserRegister(userObject);

    if (result.status === true) {
      userObject = {
        email: userObject.email,
        pass: userObject.pass,
      };

      localStorage.setItem("user_token", JSON.stringify(userObject));
      setUser(userObject);
    } else {
      return result["message"];
    }
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
