import React, { Component } from 'react'

class CommentDisplay extends Component {
  render() {
    const { comment } = this.props
    return (
      <div className="card card-body bg-secondary">
        <h2>{comment.text}</h2>
      </div>
    )
  }
}

export default CommentDisplay