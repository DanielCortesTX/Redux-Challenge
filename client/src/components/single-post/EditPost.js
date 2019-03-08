import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setActivePost } from '../../actions/posts'
import { getActivePostComments } from '../../actions/comments'
import EditPostDisplay from './EditPostDisplay'

class EditPost extends Component {
  componentDidMount(){
    this.props.setActivePost(this.props.match.params.id)
    this.props.getActivePostComments(this.props.match.params.id)
  }
  render() {
    const { post, loadingPost } = this.props
    let postDisplay
    const parentId = this.props.match.params.id
    
    if(post === null || loadingPost){
      postDisplay = <h1 className="display-4 center-item">Loading Post</h1>
    } else {
      postDisplay = <EditPostDisplay post={post} id={parentId} title={post.title} text={post.text}/>
    }


    return (
      <div className="container">
        {postDisplay}
      </div>
    )
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post: post.activePost,
    loadingPost: post.loading,
  }
}

export default connect(mapStateToProps, { setActivePost, getActivePostComments })(EditPost)