import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAllCategories } from '../actions/categories'
import { getAllPosts } from '../actions/posts'

class Home extends Component {
  componentDidMount(){
    this.props.getAllCategories()
    this.props.getAllPosts()
  }
  render() {
    const { categories, categoriesLoading, postsLoading, posts } = this.props
    let categoryFeed
    let postFeed

    if(categories === null || categoriesLoading){
      categoryFeed = <h1 className="display-4">Loading</h1>
    } else {
      categoryFeed = categories.map((category, index) => <h3 key={index}>{category.name}</h3>)
    }

    if(posts === null || postsLoading){
      postFeed = <h1 className="display-4">Loading</h1>
    } else {
      postFeed = posts.map((post, index) => <h3 key={index}>{post.title}</h3>)
    }
    return (
      <div className="container">
        <h1>Home page</h1>
        <h2>Categories</h2>
        <hr/>
        {categoryFeed}
        <hr/>
        <h2>Posts</h2>
        <hr/>
        {postFeed}
      </div>
    )
  }
}

const mapStateToProps = ({category, post}) => {
  return {
    categories: category.allCategories,
    categoriesLoading: category.loading,
    posts: post.allPosts,
    postsLoading: post.loading
  }
}

export default connect(mapStateToProps, { getAllCategories, getAllPosts })(Home)