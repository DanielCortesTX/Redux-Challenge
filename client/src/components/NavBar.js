import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <nav>
      <div className="container">
        <div className="navbar-nav">
          <Link className="navbar-brand" to="/">Home</Link>  
          <Link className="nav-link nav-item" to="/category">Categories</Link>
        </div>
      </div>
    </nav>
  )
}
