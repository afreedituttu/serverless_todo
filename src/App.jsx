import React, { useContext } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Details from './pages/Task/Details'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Profile from './pages/Profile/Profile'
import './index.css'
import { UserContext } from './context/context'

const App = () => {
  const {activeUser} = useContext(UserContext)
  console.log('App ',activeUser);
  return (<Routes>
  
    <Route path='/' element={<HomeLayout />} >
        <Route index element={<Home />} />
        <Route exact path='/tasks/:taskId' element={<Details />} />
        <Route exact path='/profile' element={<Profile />} />
    </Route>
    <Route exact path='/login' element={<Login />} />
    <Route exact path='/signup' element={<Signup />} />
    <Route path='*' element={<p>Page Not Found 404</p>} />
  </Routes>)
}

const HomeLayout = ()=> {
    return(<>
        <Navbar />
        <Outlet />
        <Footer />
    </>)
}

export default App
