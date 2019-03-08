import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classnames from 'classnames'

import { editPost } from '../../actions/posts'

class EditPostDisplay extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      text: ''
    }

    this.changeInput = this.changeInput.bind(this)
    this.modifyPost = this.modifyPost.bind(this)
  }
  componentWillReceiveProps(post){
    this.setState(() => ({
      text: post.text,
      title: post.title
    }))
  }
  modifyPost(e){
    e.preventDefault()
    console.log(this.state)
    const newPost = {
      title: this.state.title,
      text: this.state.text
    }
    this.props.editPost(newPost ,this.props.id, this.props.history)
    // this.props.createPost(newPost, this.props.history)
  }

  changeInput(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { post, errors } = this.props
    
    return (
      <div>
        <div>
          <h1 className="display-4 center-item">{post.title}</h1>
          <hr className="focus-post mb-4"/>
          <form action="submit" onSubmit={this.modifyPost}>
          <div className="form-group">
          <input 
            value={this.state.title}
            type="text"
            name="title"
            className={classnames('form-control form-control-lg', {
              'is-invalid': errors.title
            })}
            onChange={this.changeInput}/>
            {errors.title && (<div className="invalid-feedback">{errors.title}</div>)}  
        </div>
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

export default connect(mapStateToProps, { editPost })(withRouter(EditPostDisplay))


// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom'
// import classnames from 'classnames'

// // import { createPost } from '../actions/posts'

// class EditForm extends Component {
//   constructor(){
//     super()
//     this.state = {
//       title: this.props.post.title,
//       text: this.props.post.text
//     }

//     this.changeInput = this.changeInput.bind(this)
//     this.submitPost = this.submitPost.bind(this)
//   }
//   submitPost(e){
//     console.log(this.state.title)
//     // this.props.createPost(newPost, this.props.history)
//   }

//   changeInput(e){
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }
//   render() {
//     const { categories, errors } = this.props

//     let commentForm
//     if(categories === null){
//       commentForm = <h1>Loading</h1>
//     } else {
//       commentForm = <h2>test</h2>
          
//     }

//     return (
//       <div className="">
//         {commentForm}
//       </div>
//     )
//   }
// }

// const mapStateToProps = ({ errors, post }) => {
//   return {
//     errors,
//     post: post.activePost
//   }
// }

// export default connect(mapStateToProps)(withRouter(EditForm))