import { createContext, useState } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    
    const [email , setEmail] = useState("");
    const [userName , setUserName] = useState("");
    

    return(
        <AuthContext.Provider value={{email: email, userName: userName, setUserName}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider