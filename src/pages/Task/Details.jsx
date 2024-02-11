import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const { taskId } = useParams()
  return (
    <div className='wrapper'>
      <div className="container bg-gray-200 border-black border-2 p-5">
        <h1 className=' text-2xl'>TaskName : Clean</h1>
        <h2 className=' text-xl'>TaskId : {taskId}</h2>
        <p className='py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et cupiditate laudantium praesentium exercitationem alias ut esse neque deserunt sapiente eum.</p>
        <button className='m-1 py-1 px-3 bg-green-800 text-white'>completed</button>
        <button className='m-1 py-1 px-3 bg-red-800 text-white'>droped</button>
      </div>
    </div>
  )
}

export default Details
