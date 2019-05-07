import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classnames from 'classnames'

import { editComment } from '../../actions/comments'

class EditPostDisplay extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }

    this.changeInput = this.changeInput.bind(this)
    this.modifyComment = this.modifyComment.bind(this)
  }
  componentWillReceiveProps(comment){
    this.setState(() => ({
      text: comment.text
    }))
  }
  modifyComment(e){
    e.preventDefault()
    console.log(this.state)
    const newComment = {
      text: this.state.text
    }
    this.props.editComment(newComment ,this.props.id, this.props.parentId, this.props.history)
    // this.props.createPost(newPost, this.props.history)
  }

  changeInput(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { errors } = this.props
    
    return (
      <div>
        <div>
        <h1 className="display-4 center-item">Edit your post and delete.</h1>
          <hr className="focus-post mb-4"/>
          <form action="submit" onSubmit={this.modifyComment}>
            <div className="form-group">
              <textarea
                value={this.state.text}
                type="text"
                name="text"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.text
                })}
                onChange={this.changeInput}
                />
                {errors.text && (<div className="invalid-feedback">{errors.text}</div>)}
            </div>
            <div className="form-group">
              <input 
                type="submit"
                className="btn btn-large btn-primary"
              />
            </div>
          </form>
        </div>
      </div>  
    )
  }
}

const mapStateToProps = ({ errors }) => {
  return {
    errors
  }
}

export default connect(mapStateToProps, { editComment })(withRouter(EditPostDisplay))