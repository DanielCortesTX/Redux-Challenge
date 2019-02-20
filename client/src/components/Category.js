import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setActiveCategory } from '../actions/categories'
import { getCategoryPosts } from '../actions/posts'

class Category extends Component {
  componentDidMount(){
    this.props.setActiveCategory(this.props.match.params.category)
    this.props.getCategoryPosts(this.props.match.params.category)
  }
  render() {
    return (
      <div>
        <h1>Category Page</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ category, post}) => {
  return {
    allCategories: category.allCategories
  }
}

export default connect(mapStateToProps, {setActiveCategory, getCategoryPosts})(Category)