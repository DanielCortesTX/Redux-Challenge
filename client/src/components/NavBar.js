import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <nav className="navbar navbar-expand-sm p-3">
      <div className="container">
        <div className="navbar-nav nav-tabs">
          <Link className="nav-link nav-item" to="/">Home</Link>  
          <Link className="nav-link nav-item" to="/category">Categories</Link>
        </div>
      </div>
    </nav>
  )
}
