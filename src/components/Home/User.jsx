import React, { useContext } from 'react'
import { UserContext } from '../../context/context'

const Users = () => {
  const {users, activeUser} = useContext(UserContext);
  return (
    <div className="users">
      <ul>
      {
        users.map((user, index)=>{
          if(user.userId == activeUser.userId){
            return(<li key={index} className='p-2 bg-gray-400 text-black my-1'>{user.username}</li>)
          }else{
            return(<li key={index} className='p-2 bg-gray-200 text-black my-1'>{user.username}</li>)
          }
        })
      }
      </ul>
    </div>
  )
}

export default Users
