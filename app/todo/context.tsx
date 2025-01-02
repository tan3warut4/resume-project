import { createContext, ReactNode, useReducer } from "react";
import { todoReducer, TodoAction } from "./reducer";

interface TodoState {
    title: string;
    description: string;
    type: string;
    createdDate: string;
    finishedDate: string;
    status: string;
}
interface TodoContextProps {
    todoState: TodoState;
    dispatch: React.Dispatch<TodoAction>;
}

export const TodoContext = createContext<TodoContextProps | undefined>(undefined)

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [todoState, dispatch] = useReducer(todoReducer, {
        title: "",
        description: "",
        type: "",
        createdDate: "",
        finishedDate: "",
        status: ""
    })
    return (
        <TodoContext.Provider value={{ todoState, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}