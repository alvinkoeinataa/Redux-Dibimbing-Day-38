import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  const [username, setUsername] = useState("");

  const onLogin = (param) => {
    setisAuth(param);
  };

  return <AuthContext.Provider value={{ isAuth, username, onLogin }}>{children}</AuthContext.Provider>;
};
