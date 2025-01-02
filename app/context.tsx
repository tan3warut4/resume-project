import { createContext, ReactNode, useState } from "react";

interface LoginState {
    username: string 
    password: string 
}
interface LoginContextProps {
    loginState: LoginState
    setLoginState: React.Dispatch<React.SetStateAction<LoginState>>
}


export const LoginContext = createContext<LoginContextProps | undefined>(undefined)

export const LoginProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [loginState, setLoginState] = useState<LoginState>({
        username: "",
        password: ""
    })
    return (
        <LoginContext.Provider value={{ loginState, setLoginState }}>
            {children}
        </LoginContext.Provider>
    )
}