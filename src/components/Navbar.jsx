import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='wrapper flex w-full bg-slate-900 text-xl text-white p-5 justify-between'>
      <Link to='/'>Home</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  )
}

export default Navbar
