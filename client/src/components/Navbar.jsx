import React from 'react'
import { Link } from 'react-router'

export const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
      Navbar
        <div>
            <Link to="/home">Home</Link>
            <Link to="/">Login</Link>
        </div>
    </div>
  )
}
