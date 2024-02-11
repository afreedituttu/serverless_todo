import React from 'react'

const Profile = () => {
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
              <li className='p-1 bg-gray-300 my-1'>task 1</li>
              <li className='p-1 bg-gray-300 my-1'>task 2</li>
              <li className='p-1 bg-gray-300 my-1'>task 3</li>
            </ul>
          </div>
          <div className="history">
          <h1 className=' text-2xl'>Completed</h1>
          <ul>
              <li className='p-1 bg-gray-300 my-1'>task 1</li>
              <li className='p-1 bg-gray-300 my-1'>task 2</li>
              <li className='p-1 bg-gray-300 my-1'>task 3</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Profile
