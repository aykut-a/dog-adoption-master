import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="header">

      <Link to='/' className="header-button"> HOME </Link>
      <Link to='/animals' className="header-button"> DOGS </Link>
      <Link to='/about' className="header-button"> ABOUT </Link>

    </div>
  )
}
