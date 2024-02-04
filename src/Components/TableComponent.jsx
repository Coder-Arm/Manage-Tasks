import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
const TableComponent = ({tasksArr,setTasksArr}) => {
   const {setTask,setDoEdit,setId} = useContext(TasksContext);

  function handleEdit(idx){
      setTask(tasksArr[idx].task);
      setDoEdit(true);
      setId(idx)
  }

   function handleCompletion(idx){
     const tasks = [...tasksArr];
     tasks[idx].isComplete = !tasks[idx].isComplete;
    document.querySelectorAll('.task')[idx].classList.toggle('task-completed')
    localStorage.setItem('tasks',JSON.stringify(tasks));
    setTasksArr(tasks);
    
   }

   function handleDeletion(itemId){
     const tasks = [...tasksArr];
     const filteredTasks = tasks.filter((_,id) => id !== itemId);
     console.log(filteredTasks)
     localStorage.setItem('tasks',JSON.stringify(filteredTasks));
     setTasksArr(filteredTasks);
   }


  return (
    <div className="flex justify-center mt-12">
    <table className="w-[50%]">
      <thead>
        <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          tasksArr.map((item,idx) => {
            return <tr key={item.id}>
              <td className="w-[10%]" align="center">{item.id}</td>
              <td className='task w-[40%]' align="center">{item.task}</td>
              <td className="task-actions" align="center">
                <Button variant="contained" color="warning"
                  onClick={() => handleEdit(idx)}
                >Edit</Button>
                <Button variant="contained" color="success"
                  onClick={() => handleCompletion(idx)}
                >{!item.isComplete ? 'Complete' : 'Done'}</Button>
                <Button variant="contained" style={{background : 'red'}}
                   onClick={() => handleDeletion(idx)}
                ><DeleteIcon/></Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
    </div>
  )
}

export default TableComponent
