import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CategoryLink extends Component {
  render() {
    const { category } = this.props
    return (
      <div className="card card-body">
        <div>
          <h4>{category.name}</h4>
        </div>
        <Link to={'/category'} className="btn btn-lg btn-primary">{category.name} posts</Link>
      </div>
    )
  }
}

export default CategoryLink