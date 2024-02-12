import { createContext, useState } from "react";

export const TasksContext = createContext([]);

export function TasksContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    return(<TasksContext.Provider value={{tasks, setTasks}}>
        {props.children}
    </TasksContext.Provider>)
}

export const UserContext = createContext();

export function UserContextProvider(props) {
    const [users, setUsers] = useState([]);
    const [activeUser, setActiveUser] = useState();

    return(<UserContext.Provider value={{users, setUsers, activeUser, setActiveUser}}>
        {props.children}
    </UserContext.Provider>)
}