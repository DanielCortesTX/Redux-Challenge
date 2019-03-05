import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setActiveCategory } from '../actions/categories'
import { getCategoryPosts, clearActivePost } from '../actions/posts'
import { clearActivePostComments } from '../actions/comments'

import PostLink from './links/PostLink';

class Category extends Component {
  componentDidMount(){
    this.props.clearActivePostComments()
    this.props.clearActivePost()
    this.props.setActiveCategory(this.props.match.params.category)
    this.props.getCategoryPosts(this.props.match.params.category)
  }

  render() {
    const { categoryPosts, activeCategory, postsLoading } = this.props
    let heading = activeCategory.toUpperCase()
    let postFeed

    if(categoryPosts === null || postsLoading){
      postFeed = <h1 className="display-4">Loading Posts...</h1>
    } else {
      postFeed = categoryPosts.map((post, index) => <PostLink key={index} post={post}/>)
    }
    return (
      <div className="container">
        <h2 className="mb-4 center-item display-4">{heading}</h2>
        <hr className="focus-post mb-4"/>
        <div className="d-flex flex-wrap justify-content-around">
          {postFeed}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ category, post}) => {
  return {
    activeCategory: category.activeCategory,
    categoryPosts: post.activeCategoryPosts,
    postsLoading: post.loading
  }
}

export default connect(mapStateToProps, {setActiveCategory, getCategoryPosts, clearActivePostComments, clearActivePost })(Category)