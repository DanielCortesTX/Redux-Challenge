import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import classnames from 'classnames'

// import { createPost } from '../actions/posts'

class EditForm extends Component {
  constructor(){
    super()
    this.state = {
      title: this.props.post.title,
      text: this.props.post.text
    }

    this.changeInput = this.changeInput.bind(this)
    this.submitPost = this.submitPost.bind(this)
  }
  submitPost(e){
    console.log(this.state.title)
    // this.props.createPost(newPost, this.props.history)
  }

  changeInput(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { categories, errors } = this.props

    let commentForm
    if(categories === null){
      commentForm = <h1>Loading</h1>
    } else {
      commentForm = <h2>test</h2>
          
    }

    return (
      <div className="">
        {commentForm}
      </div>
    )
  }
}

const mapStateToProps = ({ errors }) => {
  return {
    errors
  }
}

export default connect(mapStateToProps)(withRouter(EditForm))




// <form onSubmit={this.submitPost}>
//       <div className="form-group">
//       <input 
//             type="text"
//             className={classnames('form-control form-control-lg', {
//               'is-invalid': errors.title
              
//             })}
//             name="title"
//             placeholder="Post Title"
//             value={this.state.title}
//             onChange={this.changeInput}
//             id=""/>
//           {errors.title && (<div className="invalid-feedback">{errors.title}</div>)}
//         </div>
//         <div className="form-group">
//           <input 
//             type="text"
//             className={classnames('form-control form-control-lg', {
//               'is-invalid': errors.text
//             })}
//             name="text"
//             placeholder="Post Text"
//             value={this.state.text}
//             onChange={this.changeInput}
//           />
//           {errors.text && (<div className="invalid-feedback">{errors.text}</div>)}
//         </div>
//         <div className="form-group">
//           <input type="submit" className="btn btn-large btn-primary"/>
//         </div>
//       </form>  