import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  // const [name, setName] = useState("Shuvo")

   
    
  const info = {
    // product
  }
    
  return (

    <div>
       <AuthContext.Provider value={info}>
            {children}
       </AuthContext.Provider>
    </div>

  );

};

export default AuthProvider;