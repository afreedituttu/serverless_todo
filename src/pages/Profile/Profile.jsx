import React, { useContext } from 'react'
import { TasksContext } from '../../context/context'

const Profile = () => {
  const {tasks, setTaks} = useContext(TasksContext)
  return (
    <div className='wrapper'>
      <h1 className=' text-2xl'>Profile</h1>
        <div className="container grid grid-cols-custom-profile">
          <div className="user-details">
            <input value='data' type="text" name='name' className=' p-2 text-xl border-b-2 border-b-gray-400 my-2 w-full' />
            <input value='data@gmail.com' type="email" name='email' className=' p-2 text-xl border-b-2 border-b-gray-400 my-2 w-full' />
            <input value='0' type="number" name='age' className=' p-2 text-xl border-b-2 border-b-gray-400 my-2 w-full' />
            <button className='px-3 py-1 bg-blue-800 m-1 text-white'>Update Profile</button>
            <button className='px-3 py-1 bg-red-800 m-1 text-white'>Delete</button>
          </div>
          <div className="current-tasks">
          <h1 className=' text-2xl'>Current tasks</h1>
            <ul>
            {tasks.length>0?(tasks.map((task, index)=>{
              if(task.status == 'not_completed'){
                return <li key={index} className='p-1 bg-gray-300 my-1'>{task.task_name}</li>
              }
            })):("None")}
            </ul>
          </div>
          <div className="history">
          <h1 className=' text-2xl'>Completed</h1>
          <ul>
            {tasks.length>0?(tasks.map((task, index)=>{
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
