import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAllCategories, setActiveCategory } from '../actions/categories'
import { getAllPosts, clearActivePost } from '../actions/posts'
import { clearActivePostComments } from '../actions/comments'

import CategoryLink from './links/CategoryLink'
import HomePostLink from './links/HomePostLink'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      filter: 'timestamp'
    }
  }
  componentDidMount(){
    this.props.clearActivePostComments()
    this.props.clearActivePost()
    this.props.getAllCategories()
    this.props.getAllPosts()
    this.props.setActiveCategory('')
  }
  render() {
    const { categories, categoriesLoading, postsLoading, posts } = this.props
    let categoryFeed
    let postFeed

    if(categories === null || categoriesLoading){
      categoryFeed = <h1 className="display-4 center-item">Loading</h1>
    } else {
      categoryFeed = categories.map((category) => <CategoryLink key={category._id} category={category}/>)
    }

    if(posts === null || postsLoading){
      postFeed = <h1 className="display-4 center-item">Loading</h1>
    } else {
      postFeed = posts.map((post, index) => <HomePostLink key={index} post={post}/>)
    }

    return (
      <div className="container">
        <h1 className="mb-4 center-item display-4">Post-About-It</h1>
        <div className="card mb-4">
          <p className="lead p-3">Welcome to Post-About-It! This is a site where anyone can add posts about topics, vote and comment on them. Click a category to see all its posts or click a post below to view its content</p>
        </div>
        <h2 className="mb-4 center-item display-4">Categories</h2>

        <hr/>

        <div className="d-flex">
          {categoryFeed}
        </div>

        <hr/>

        <h2 className="mb-4 center-item display-4">Posts</h2>

        <hr/>

        <div className="d-flex flex-wrap">
          {postFeed}
        </div>

        <hr/>
      </div>
    )
  }
}

const mapStateToProps = ({category, post}) => {
  return {
    categories: category.allCategories,
    categoriesLoading: category.loading,
    postsLoading: post.loading,
    posts: post.allPosts
  }
}

export default connect(mapStateToProps, { getAllCategories, getAllPosts, setActiveCategory, clearActivePostComments, clearActivePost })(Home)