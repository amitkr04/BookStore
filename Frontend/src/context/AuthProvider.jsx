import React, { createContext, useContext, useState } from "react"; 

export const AuthContext = createContext(); 
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users"); // get user data from local storage if available 
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined // set user data to state if available in local storage 
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}> 
      {children}
    </AuthContext.Provider>
  );
  // AuthContext.Provider is a wrapper component that provides authUser and setAuthUser to all its children components 
}
export const useAuth = () => useContext(AuthContext); // custom hook to use auth context in components 