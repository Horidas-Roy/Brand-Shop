/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Children, createContext } from "react";

export const AuthContext=createContext();

const AuthProvider = ({children}) => {
     const name="horidas"
    const info={
        name,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
