import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TasksContext } from "../../context/context";

const Details = () => {
  const { taskId } = useParams()
  const {tasks, setTasks} = useContext(TasksContext)
  const [task, setTask] = useState({})
  const [state, setState] = useState(undefined)

  useEffect(()=>{
    function fetchTask(id){
      const result = tasks.filter((e)=>{
        if(e.taskId===parseInt(id)){
          return e
        }
      })
      setTask(...result)
    }
    fetchTask(taskId)
  }, [])

  const complete_task = (id)=> {
    setTasks(()=>{
      return tasks.map((e)=>{
        if(e.taskId == id){
          e['status'] = 'completed'
        }
        return e;
      })
    })
    setState(true)
  }
  return (
    <div className='wrapper'>
      
      {state?(<div className=" p-2 bg-green-500 text-white text-xl">Task marked as completed</div>):("")}
        <div className="container bg-gray-200 border-black border-2 p-5">
        <h1 className=' text-2xl'>TaskName : {task.task_name}</h1>
        <h2 className=' text-xl'>TaskId : {taskId}</h2>
        <p className='py-3'>{task.task_content}</p>
        <button onClick={()=>{complete_task(task.taskId)}} className='m-1 py-1 px-3 bg-green-800 text-white'>completed</button>
      </div>
    </div>
  )
}

export default Details
