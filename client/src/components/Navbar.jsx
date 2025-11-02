import React from 'react'
import { Link } from 'react-router'

export const Navbar = () => {
  return (
     <div className="flex justify-between items-center h-16 p-4 bg-slate-100">
      <Link to="/">
          <img alt="MongoDB logo" className="h-10 inline hover:translate-y-1 transform transition duration-500" src="\jiyeonauto.png"></img>
        </Link>
      <nav className="flex justify-end items-center space-x-2">

        <Link className="inline-flex items-center justify-center whitespace-nowrap text-md 
        font-medium ring-offset-background transition-colors focus-visible:outline-none 
        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
        disabled:pointer-events-none disabled:opacity-50 border border-input bg-background 
        hover:bg-slate-300 h-9 rounded-md px-3 hover:translate-y-1 duration-500" to="/">
          Home
        </Link>
        <Link className="inline-flex items-center justify-center whitespace-nowrap text-md 
        font-medium ring-offset-background transition-colors focus-visible:outline-none 
        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
        disabled:pointer-events-none disabled:opacity-50 border border-input bg-background 
        hover:bg-slate-300 h-9 rounded-md px-3 hover:translate-y-1 duration-500" to="/shop">
          Shop
        </Link>
        <Link className="inline-flex items-center justify-center whitespace-nowrap text-md 
        font-medium ring-offset-background transition-colors focus-visible:outline-none 
        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
        disabled:pointer-events-none disabled:opacity-50 border border-input bg-background 
        hover:bg-slate-300 h-9 rounded-md px-3 hover:translate-y-1 duration-500"
        
        to="/login"
        >Login
        </Link>
      </nav>
    </div>


  )
}
