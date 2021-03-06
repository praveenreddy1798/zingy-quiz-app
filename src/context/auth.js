import { createContext, useContext, useState } from "react";
const authInitalState = {
  isAuth: null,
  token: null,
  userDetails: {},
  setAuth: () => {},
};

const AuthContext = createContext(authInitalState);

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const userDetails = localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails"))
    : {};
  const [auth, setAuth] = useState({
    isAuth: !!token,
    token,
    userDetails: userDetails,
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
