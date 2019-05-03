import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setEditComment } from '../../actions/comments'
// import EditPostDisplay from './EditPostDisplay'

class EditPost extends Component {
  componentDidMount(){
    this.props.setEditComment(this.props.match.params.id)
  }
  render() {
    const { comment, loading } = this.props
    let commentDisplay
    // const parentId = this.props.match.params.id
    
    if(comment === null || loading){
      commentDisplay = <h1 className="display-4 center-item">Loading Comment</h1>
    } else {
      commentDisplay = <h1 className="display-4 center-item">{comment.text}</h1>
    }


    return (
      <div className="container">
        {commentDisplay}
      </div>
    )
  }
}

const mapStateToProps = ({ comment }) => {
  return {
    comment: comment.editComment,
    loading: comment.loading,
  }
}

export default connect(mapStateToProps, { setEditComment })(EditPost)


// <EditPostDisplay post={post} id={parentId} title={post.title} text={post.text}/>