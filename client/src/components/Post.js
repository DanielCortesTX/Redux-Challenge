import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getActivePost } from '../actions/posts'

class Post extends Component {
  componentDidMount(){
    this.props.getActivePost(this.props.match.params.id)
  }
  render() {
    const { post, loadingPost } = this.props
    let postDisplay
    
    if(post === null || loadingPost){
      postDisplay = <h1>Loading Post</h1>
    } else {
      postDisplay = <div><h1>{post.title}</h1><h1>{post.text}</h1></div>
    }
    return (
      <div>
        <h1>Post Page</h1>
        {postDisplay}
      </div>
    )
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post: post.activePost,
    loadingPost: post.loading
  }
}

export default connect(mapStateToProps, { getActivePost })(Post)