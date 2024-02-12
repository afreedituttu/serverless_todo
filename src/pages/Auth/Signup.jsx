import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username:"",
    password:"",
    age:""
  });
  const {users, setUsers} = useContext(UserContext);
  const onchange_data = (e)=> {
    const {name, value} = e.target
    setUser((old_values)=>{
      return {
        ...old_values,
        [name]:value
      }
    })
  }
  const gen_user_id = () => {
    var last_user_id;
    if (users.length != 0) {
      last_user_id = users[users.length - 1].userId;
    } else {
      last_user_id = 0;
    }
    return last_user_id + 1;
  };
  const createUser = ()=> {
    user['userId'] = gen_user_id();
    setUsers((old_users)=>{
      return [...old_users, user]
    })
    setShow(true)
    setMessage("User created succesfully, redirecting to Login...")
    setTimeout(()=>{
      navigate('/login')
    },2000)
  }
  return (
    <div className='flex justify-center my-10'>
      <div className="card bg-gray-300 border rounded-sm p-5">
        {show?<div className=" w-full bg-green-500 text-xl text-center p-1">{message}</div>:""}
        <h1 className='text-center text-2xl py-3'>Sign Up</h1>
        <input name='username' onChange={onchange_data} value={user.username} type="text" className=' min-w-60 w-full outline-none border-b-2 border-b-gray-200 p-1 my-3' placeholder='username' />
        <input name='password' onChange={onchange_data} value={user.password} type="text" className=' min-w-60 w-full outline-none border-b-2 border-b-gray-200 p-1 my-3' placeholder='password' />
        <input name='age' onChange={onchange_data} value={user.age} type="number" className=' min-w-60 w-full outline-none border-b-2 border-b-gray-200 p-1 my-3' placeholder='age' />
        <button onClick={createUser} type="submit" className=' min-w-60 w-full outline-none border-b-2 bg-green-500 p-1 my-3'>Submit</button>
      </div>
    </div>
  )
}

export default Signup
