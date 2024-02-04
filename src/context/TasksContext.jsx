import { createContext, useState } from "react";

export const TasksContext = createContext();

export const TasksContextProvider = ({children}) => {
    const [tasksArr,setTasksArr] = useState([]);
    const [task,setTask] = useState('');
    const [id,setId] = useState(1);
    const [doEdit,setDoEdit] = useState(false);

    return <TasksContext.Provider 
    value={{tasksArr,setTasksArr,task,setTask,doEdit,setDoEdit,id,setId}}>
        {children}
    </TasksContext.Provider>
}
