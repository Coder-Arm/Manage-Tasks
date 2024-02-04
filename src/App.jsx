import { useContext, useEffect } from "react"
import InputComponent from "./Components/InputComponent"
import TableComponent from "./Components/TableComponent"
import { TasksContext } from "./context/TasksContext"

const App = () => {
  const {tasksArr,setTasksArr} = useContext(TasksContext);

  useEffect(() => {
   if(JSON.parse(localStorage.getItem('tasks'))){
    setTasksArr(JSON.parse(localStorage.getItem('tasks')))
   }
  },[])

  return (
    <div>
      <InputComponent tasksArr={tasksArr} setTasksArr={setTasksArr}/>
      {
       tasksArr.length > 0 && <TableComponent tasksArr={tasksArr} setTasksArr={setTasksArr}/>   
      }
    </div>
  )
}

export default App
