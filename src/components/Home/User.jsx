import React, { useContext } from 'react'
import { UserContext } from '../../context/context'

const Users = () => {
  const {users} = useContext(UserContext);
  return (
    <div className="users">
      <ul>
      {
        users.map((user, index)=>{
          return(<li key={index} className='p-2 bg-gray-300 text-black my-1'>{user.username}</li>)
        })
      }
      </ul>
    </div>
  )
}

export default Users
