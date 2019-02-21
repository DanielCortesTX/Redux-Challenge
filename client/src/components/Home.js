import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAllCategories, setActiveCategory } from '../actions/categories'
import { getAllPosts } from '../actions/posts'

import CategoryLink from './links/CategoryLink'
import PostLink from './links/PostLink'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      filter: 'timestamp'
    }
  }
  componentDidMount(){
    this.props.getAllCategories()
    this.props.getAllPosts()
    this.props.setActiveCategory('')
  }
  render() {
    const { categories, categoriesLoading, postsLoading, posts } = this.props
    let categoryFeed
    let postFeed

    if(categories === null || categoriesLoading){
      categoryFeed = <h1 className="display-4">Loading</h1>
    } else {
      categoryFeed = categories.map((category) => <CategoryLink key={category._id} category={category}/>)
    }

    if(posts === null || postsLoading){
      postFeed = <h1 className="display-4">Loading</h1>
    } else {
      postFeed = posts.map((post, index) => <PostLink key={index} post={post}/>)
    }
    
    return (
      <div className="container">
        <h1>Home page</h1>
        <h2>Categories</h2>
        <hr/>
        <div className="d-flex">
          {categoryFeed}
        </div>
        <hr/>
        <h2>Posts</h2>
        <hr/>
        <div className="d-flex">
          {postFeed}
        </div>
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

export default connect(mapStateToProps, { getAllCategories, getAllPosts, setActiveCategory })(Home)