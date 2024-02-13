import React, { useContext, useState, useEffect } from 'react'
import { TasksContext, UserContext } from '../../context/context'

const Profile = () => {
  const { tasks } = useContext(TasksContext);
  const {activeUser} = useContext(UserContext)
  console.log('tasks ', tasks);
  
  function find_user_task(){
    const temp_user_tasks = tasks.find((t)=>{
      if(t.userId == activeUser.userId){
        return t
      }
    })
    if(!temp_user_tasks){
      return []
    }
    return temp_user_tasks.tasks
  }
  
  const [user_tasks, set_user_tasks] = useState(find_user_task())
  console.log('usertasks ', user_tasks);

  useEffect(()=>{
    set_user_tasks(find_user_task())
  }, [tasks])

  return (
    <div className='wrapper'>
      <h1 className=' text-2xl'>Profile</h1>
        <div className="container grid grid-cols-custom-profile">
          <div className="user-details">
            <input value={activeUser.username} type="text" name='name' className=' p-2 text-xl border-b-2 border-b-gray-400 my-2 w-full' />
            <input value={activeUser.password} type="email" name='email' className=' p-2 text-xl border-b-2 border-b-gray-400 my-2 w-full' />
            <input value={activeUser.age} type="number" name='age' className=' p-2 text-xl border-b-2 border-b-gray-400 my-2 w-full' />
            <button className='px-3 py-1 bg-blue-800 m-1 text-white'>Update Profile</button>
            <button className='px-3 py-1 bg-red-800 m-1 text-white'>Delete</button>
          </div>
          <div className="current-tasks">
          <h1 className=' text-2xl'>Current tasks</h1>
            <ul>
            {tasks.length>0?(user_tasks.map((task, index)=>{
              if(task.status == 'not_completed'){
                return <li key={index} className='p-1 bg-gray-300 my-1'>{task.task_name}</li>
              }
            })):("None")}
            </ul>
          </div>
          <div className="history">
          <h1 className=' text-2xl'>Completed</h1>
          <ul>
            {tasks.length>0?(user_tasks.map((task, index)=>{
              if(task.status == 'completed'){
                return <li key={index} className='p-1 bg-gray-300 my-1'>{task.task_name}</li>
              }
            })):("None")}
          </ul>
          </div>
        </div>
    </div>
  )
}

export default Profile
