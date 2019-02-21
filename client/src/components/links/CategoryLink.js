import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CategoryLink extends Component {
  render() {
    const { category } = this.props
    let name = category.name
    const upper = name.toUpperCase()
    return (
      <div className="card card-body mx-3">
        
        <Link to={`/category/${category.name}`} className="btn btn-lg btn-info">{upper}</Link>
      </div>
    )
  }
}

export default CategoryLink