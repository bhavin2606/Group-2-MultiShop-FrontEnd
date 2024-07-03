import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem('isLoggedIn')) || false
  );

//   useEffect(() => {
//     const handleStorageChange = () => {
//       setIsLoggedIn(JSON.parse(localStorage.getItem('isLoggedIn')));
//     };

//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

  // const login = () => {
  //   localStorage.setItem('isLoggedIn', true);
  //   setIsLoggedIn(true);
  // };

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
