import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/context'

const Navbar = () => {
  const {setActiveUser} = useContext(UserContext);

  const logout = ()=> {
    setActiveUser(null)
  }
  return (
    <div className='wrapper flex w-full bg-slate-900 text-xl text-white p-5 justify-between'>
      <Link to='/'>Home</Link>
      <Link to='/profile'>Profile</Link>
      <button onClick={logout} className=' py-1 px-3 text-white'>Log out</button>
    </div>
  )
}

export default Navbar
