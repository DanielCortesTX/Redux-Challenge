import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewCommentForm extends Component {
  state = {
    text: '',
    author: ''
  }
  onChange = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value
    }))
  }
  render() {
    return (
      <div>
        <form action="submit">
          <div>
            <textarea 
              type="text"
              name="text"
              onChange={this.onChange}
              />
          </div>
          <div>
            <input 
              type="text"
              name="author"
              onChange={this.onChange}/>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post: post.activePost
  }
}

export default connect(mapStateToProps)(NewCommentForm)