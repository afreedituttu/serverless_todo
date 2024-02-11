import React, { useContext, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Users from '../../components/Home/User'
import { TasksContext } from '../../context/tasksContext'

const Home = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const [currently_adding, setCurrentlyAdding] = useState(false)

  const [task, setTask] = useState({
    task_name:'',
    task_content:''
  })

  const onchange_data = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]:value
    })
  }
  const addTask = ()=> {
    setTasks((old_tasks)=>{
      const gen_task_id = () => {
        var last_element_id
        if(old_tasks.length != 0){
          last_element_id = old_tasks[old_tasks.length - 1].taskId
        }else{
          last_element_id = 0
        }
        return last_element_id + 1
      }
      task['taskId'] = gen_task_id()
      return [...old_tasks, task, task]
    })
  }
  console.log(tasks);
  return (
    <div className='wrapper'>
      <h1 className=' text-2xl my-2'>User name : Afreedi z</h1>
      <div className="container grid grid-cols-custom">
        <div className="links bg-gray-300 p-5 custom-min-h">
          <ul>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div className="tasks flex flex-col justify-between">
          <ul>
            <div className="find">
              <input type="text" placeholder='Search Tasks by name' className=' w-11/12 border-2 border-black p-2 mb-3' />
              <button className='p-2 bg-green-500 text-white w-1/12 border-2 border-black'>find</button>
            </div>
            {
              tasks.map((task, index)=>{
                return(<li className='task flex justify-between p-1 border-b-2 border-b-gray-500'>
              <div className="task-details">
                <span className=' pr-2'>{index}.</span>
                <span>{task.task_name}</span>
              </div>
              <div className="task-action">
                <Link to={'/tasks/'+task.taskId}><button className='pt-1 pb-1 pl-3 pr-3 bg-black text-white m-1'>View</button></Link>  
                <button className='pt-1 pb-1 pl-3 pr-3 bg-red-500 text-white m-1'>Delete</button>
              </div>
            </li>)
              })
            }
          </ul>
          <div className="add" onClick={()=>{
            setCurrentlyAdding((old)=>{
              return true;
            })
          }}>
            <button className='py-1 px-3 bg-green-600 text-white text-xl'>+ Add Task</button>
          </div>
            {currently_adding?
            <div className="add-task-container flex justify-center items-center absolute  top-0 left-0 bottom-0 right-0 bg-black bg-opacity-30">
              <div className="add-task flex flex-col p-5 bg-white">
                <span>Task Id : 1</span>
                <input className='custom-add-input my-2' value={task.task_name} onChange={onchange_data} type="text" name='task_name' placeholder='task name' />
                <textarea className='custom-add-textarea ' value={task.task_content} onChange={onchange_data} name="task_content" placeholder="write about your tasks" id="" cols="30" rows="10"></textarea>
                <button className='custom-add-button bg-green-500 text-white' onClick={addTask} >Add</button>
                <button className='custom-add-button bg-red-500 text-white' onClick={()=>{
                  setCurrentlyAdding((old)=>{
                  return false;
                  })}}>
                  Close
                </button>
              </div>
            </div>:""
            }
        </div>
        <Users />
      </div>
    </div>
  )
}

export default Home
