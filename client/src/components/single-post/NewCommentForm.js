import React, { Component } from 'react'

class NewCommentForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: '',
      author: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()
    const { parentId } = this.props

    const newComment = {
      text: this.state.text,
      author: this.state.author,
      parentId: parentId
    }

    this.props.addComment(newComment)
    this.setState({ 
      text: '',
      author: '' })
  }
  render() {
    return (
      <div className="card card-body">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <textarea 
              type="text"
              name="text"
              value={this.state.text}
              className="form-control form-control-lg"
              placeholder="Type comment here"
              onChange={this.onChange}
              />
          </div>
          <div className="form-group">
            <input 
              type="text"
              name="author"
              value={this.state.author}
              className="form-control form-control-lg"
              placeholder="Author"
              onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <input 
              type="submit"
              className="btn btn-large btn-primary"/>
          </div>
        </form>
      </div>
    )
  }
}

export default NewCommentForm

// const mapStateToProps = ({ post }) => {
//   return {
//     post: post.activePost
//   }
// }

// export default connect(mapStateToProps)(NewCommentForm)