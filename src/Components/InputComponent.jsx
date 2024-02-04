import { TextField,Button } from '@mui/material';
import { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

const InputComponent = ({tasksArr,setTasksArr}) => {
    
     const {task,setTask,id,setId,doEdit,setDoEdit} = useContext(TasksContext);
   function handleTask(){
     const tasks = [...tasksArr];
     if(tasks.length > 0){
      const id = tasks[tasks.length-1].id;
      console.log('id',id)
      setId(id)
      tasks.push({id : id+1,task,isComplete : false});
      localStorage.setItem('tasks',JSON.stringify(tasks));
    setTasksArr(tasks)
     }
     else{
     tasks.push({id,task,isComplete : false});
    localStorage.setItem('tasks',JSON.stringify(tasks));
    setTasksArr(tasks)
    setId(prev => prev+1)
     }
     setTask('');
   }
   
   function handleEdit(){
    const tasks = [...tasksArr];
    tasks[id].task = task;
    localStorage.setItem('tasks',JSON.stringify(tasks));
    setTasksArr(tasks);
    setTask('');
    setDoEdit(false);
   }

  return (
    <div className='flex justify-center mt-10 gap-4'>
    <TextField placeholder='Task' value={task} onChange={(e) => setTask(e.target.value)}/>
   {
   !doEdit ? <Button variant='contained' onClick={handleTask}>Add Task</Button>
    : 
    <Button variant='contained' onClick={handleEdit}>Edit Task</Button>
  }
    </div>
  )
}

export default InputComponent
