import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    
    const [email , setEmail] = useState("");
    const [userName , setUserName] = useState("");
    


    useEffect(() =>{
        setUserName(localStorage.getItem("@times_user_name"))
    },[])

    const saveData = (user_name,token) =>{
        localStorage.setItem("@times_user_name", user_name );
        localStorage.setItem("@times_token",token);
    }

    const removeData = () =>{
        localStorage.removeItem("@times_user_name")
    }
    

    return(
        <AuthContext.Provider value={{email: email, userName: userName, saveData, removeData}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider