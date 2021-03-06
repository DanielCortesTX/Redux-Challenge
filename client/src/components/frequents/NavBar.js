import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    const { activeCategory } = this.props
    let upper = activeCategory.toUpperCase()
    // const categoryLink = <Link className="nav-link nav-item" to=`/`></Link>
    return (
      <nav className="navbar navbar-expand-sm p-3">
        <div className="container">
          <div className="navbar-nav nav-tabs">
            <Link className="nav-link nav-item" to="/">HOME</Link>
            <Link className="nav-link nav-item" to="/create">CREATE POST</Link>
            {activeCategory  && <Link className="nav-link nav-item" to={`/category/${activeCategory}`}>TO {upper} PAGE</Link>}
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ category }) => {
  return {
    activeCategory: category.activeCategory
  }
}

export default connect(mapStateToProps)(NavBar)