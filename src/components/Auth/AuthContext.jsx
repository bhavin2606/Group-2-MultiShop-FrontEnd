import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem('isLoggedIn')) || false
  );

  const login = () => {
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
  };

  // const logout = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   // setIsLoggedIn(false);
  // };

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
