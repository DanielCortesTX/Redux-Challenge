import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import classnames from 'classnames'

import { getAllCategories } from '../actions/categories'
import { createPost } from '../actions/posts'

class CreateForm extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      text: '',
      author: '',
      category: 'none'
    }

    this.categoryChange = this.categoryChange.bind(this)
    this.changeInput = this.changeInput.bind(this)
    this.submitPost = this.submitPost.bind(this)
  }
  submitPost(e){
    e.preventDefault()
    const newPost = {
      title: this.state.title,
      text: this.state.text,
      author: this.state.author,
      category: this.state.category
    }
    console.log(newPost)
    this.props.createPost(newPost, this.props.history)
  }
  componentDidMount(){
    this.props.getAllCategories()
  }

  changeInput(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  categoryChange(e) {
    this.setState({
      category: e.target.value
    })
  }
  render() {
    const { categories, errors } = this.props

    let commentForm
    if(categories === null){
      commentForm = <h1>Loading</h1>
    } else {
      commentForm = 
      <form onSubmit={this.submitPost}>
        <div className="form-group">
          <input 
            type="text"
            className={classnames('form-control form-control-lg', {
              'is-invalid': errors.title
              
            })}
            name="title"
            placeholder="Post Title"
            value={this.state.title}
            onChange={this.changeInput}
            id=""/>
          {errors.title && (<div className="invalid-feedback">{errors.title}</div>)}
        </div>
        <div className="form-group">
          <input 
            type="text"
            className={classnames('form-control form-control-lg', {
              'is-invalid': errors.text
            })}
            name="text"
            placeholder="Post Text"
            value={this.state.text}
            onChange={this.changeInput}
          />
          {errors.text && (<div className="invalid-feedback">{errors.text}</div>)}
        </div>
        <div className="form-group">
          <input 
            type="text"
            className={classnames('form-control form-control-lg', {
              'is-invalid': errors.author
            })}
            name="author"
            placeholder="Author"
            value={this.state.author}
            onChange={this.changeInput}
            id=""
          />
          {errors.author && (<div className="invalid-feedback">{errors.author}</div>)}
        </div>
        <div className="form-group">
        <select
        value={this.state.category}
        className={classnames('form-control form-control-lg', {
          'is-invalid': errors.category
        })}
        onChange={this.categoryChange}
        >{
        categories.map((category, index) => (
          <option
            value={category.name} 
            key={index}
            defaultValue='none'>
              {category.name}
          </option>))}
    </select>
    {errors.category && (<div className="invalid-feedback">{errors.category}</div>)}
    </div>
    <div className="form-group">
    <input type="submit" className="btn btn-large btn-primary"/>
    </div>
        
      
      </form>
      
      
    }

    return (
      <div className="">
        {commentForm}
      </div>
    )
  }
}

const mapStateToProps = ({ category, errors }) => {
  let categories = category.allCategories.concat({name: 'none'})
  return {
    categories: categories,
    errors
  }
}

export default connect(mapStateToProps, { getAllCategories, createPost })(withRouter(CreateForm))

// <select 
//             onChange={this.handleUserLogin} 
//             value={checkNull(this.props.authedUser)}
//             className="custom-select">
//           {this.props.usersId.map((user) => (
//             <option
//               value={user} 
//               key={user}
//               defaultValue={user === this.props.authedUser}
//               >{checkNull(user)}</option>
//             )
//           )}
//           </select>





// <form onSubmit={console.log(this.state)}>
//       <select 
//         onChange={this.categoryChange} 
//         value={checkNull(this.props.category)}
//         className="">
//         {categories.map((category, index) => (
//           <option
//             value={category.name} 
//             key={index}
//             defaultValue={checkNull(category)}
//           >{checkNull(category)}</option>
//         )
//         )}
//       </select>
//     </form>



// <h2 key={index}>{category.name}</h2>




// categories.map((category, index) => (<option
//   value={category.name} 
//   key={index}
//   defaultValue={'loading'}
// >{category.name}</option>))