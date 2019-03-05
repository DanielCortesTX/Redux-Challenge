import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

class CategoryLink extends Component {
  render() {
    const { category } = this.props
    let name = category.name
    const upper = name.toUpperCase()
    return (
      <div className="card card-body mx-3">
        
        <Link to={`/category/${category.name}`} className={classnames('btn btn-lg', {
          'btn-warning': category.name === 'movies'
        }, {
          'btn-danger': category.name === 'books'
        }, {
          'btn-primary': category.name === 'games'
        })}>{upper}</Link>
      </div>
    )
  }
}

export default CategoryLink

// className="btn btn-lg btn-info"