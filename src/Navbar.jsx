import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home';
import Task3 from './Task3/Task3';
import Contact from './Contact';

function Navbar() {
  return (
    <div className='flex  bg-gray-900 text-white place-content-evenly'>
        <div className='m-3'>
            <img src="logo.svg"/>
        </div>

        <div className='xyz space-x-3 m-2 font-bold flex flex-col sm:flex-row'>
            <Link className='menu' to="/">Home</Link>
            <Link className='menu' to="/Task3/Task3">Product</Link>
            <Link className='menu' to="/Contact">Contact</Link>
        </div>
        <div className='xyz space-x-3 m-2 font-bold '>
            <Link className='menu border-2 rounded p-1' to="/Login">Login</Link>
        </div>

    </div>
  )
}

export default Navbar