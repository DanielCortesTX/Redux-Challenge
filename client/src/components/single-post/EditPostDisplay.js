import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

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
    const { post } = this.props
    
    return (
      <div className="center-item">
        <div className="">
          <h1 className="display-4">{post.title}</h1>
          <hr className="focus-post mb-4"/>
          <form action="submit" onSubmit={this.modifyPost}>
            <div>
              <textarea
                value={this.state.text}
                type="text"
                name="text"
                onChange={this.changeInput}
                />
            </div>
            <div>
              <input 
                value={this.state.title}
                type="text"
                name="title"
                onChange={this.changeInput}/>
            </div>
            <div>
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