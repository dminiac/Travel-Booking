import { useEffect } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

function getInitialState() {
  const initState = localStorage.getItem("authData")
  return initState ? JSON.parse(initState) : ""
}

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState("");

  useEffect(() => {
    setAuth(getInitialState);
  },[]);
  
  useEffect(() => {
    localStorage.setItem("authData", JSON.stringify(auth));
  }, [auth]);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}> 
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;