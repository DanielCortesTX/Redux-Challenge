import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setActiveCategory } from '../actions/categories'
import { getCategoryPosts } from '../actions/posts'

import PostLink from './links/PostLink';

class Category extends Component {
  componentDidMount(){
    this.props.setActiveCategory(this.props.match.params.category)
    this.props.getCategoryPosts(this.props.match.params.category)
  }

  render() {
    const { categoryPosts, activeCategory, postsLoading } = this.props
    let postFeed

    if(categoryPosts === null || postsLoading){
      postFeed = <h1 className="display-4">Loading Posts...</h1>
    } else {
      postFeed = categoryPosts.map((post, index) => <PostLink key={index} post={post}/>)
    }
    return (
      <div>
        <h1>Category Page</h1>
        <div className="d-flex">
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

export default connect(mapStateToProps, {setActiveCategory, getCategoryPosts})(Category)