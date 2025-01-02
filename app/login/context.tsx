import { createContext, ReactNode, useReducer } from "react";
import { LoginAction, loginReducer } from "./reducer";

interface LoginState {
    username: string
    password: string
}
interface LoginContextProps {
    loginState: LoginState
    dispatch: React.Dispatch<LoginAction>
}


export const LoginContext = createContext<LoginContextProps | undefined>(undefined)

export const LoginProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [loginState, dispatch] = useReducer(loginReducer, {
        username: "",
        password: ""
    })
    return (
        <LoginContext.Provider value={{ loginState, dispatch }}>
            {children}
        </LoginContext.Provider>
    )
}