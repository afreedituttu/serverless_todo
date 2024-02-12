import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/context';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username:"",
    password:"",
  });
  const {users, setActiveUser} = useContext(UserContext);
  const onchange_data = (e)=> {
    const {name, value} = e.target
    setUser((old_values)=>{
      return {
        ...old_values,
        [name]:value
      }
    })
  }
  const LoginUser = ()=> {
    console.log(users);
    console.log(user);
    const temp_user = users.find((u)=>{
      if(u.username == user.username){
        if(u.password == user.password){
          return u
        }
      }
    })
    if(!temp_user){
      setShow(true)
      setMessage("Login unsuccessfull")
    }else{
      setShow(true)
      setMessage("Login successfull")
      setActiveUser(temp_user)
      setTimeout(()=>{
        navigate('/')
      }, 2000)
    }
    console.log(temp_user);
    
  }
  return (
    <div className='flex justify-center my-10'>
      <div className="card bg-gray-300 border rounded-sm p-5">
        {show?<div className=" w-full bg-blue-500 text-xl text-center p-1">{message}</div>:""}
        <h1 className='text-center text-2xl py-3'>Login</h1>
        <input name='username' onChange={onchange_data} value={user.username} type="text" className=' min-w-60 w-full outline-none border-b-2 border-b-gray-200 p-1 my-3' placeholder='username' />
        <input name='password' onChange={onchange_data} value={user.password} type="text" className=' min-w-60 w-full outline-none border-b-2 border-b-gray-200 p-1 my-3' placeholder='password' />
        <button onClick={LoginUser} type="submit" className=' min-w-60 w-full outline-none border-b-2 bg-green-500 p-1 my-3'>Login</button>
        <Link to='/signup' className=' text-blue-600 underline'>Create account</Link>
      </div>
    </div>
  )
}

export default Login
