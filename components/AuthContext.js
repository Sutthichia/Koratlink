// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isPremiumMember, setIsPremiumMember] = useState(false); 

  const login = (user) => {
    setIsLoggedIn(true);
    setUserInfo(user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
    setIsPremiumMember(false); 
  };

  const upgradeToPremium = () => {
    setIsPremiumMember(true); 
  };

  const isUserLoggedIn = () => {
    return isLoggedIn; 
  };
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userInfo, isPremiumMember, upgradeToPremium, isUserLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
