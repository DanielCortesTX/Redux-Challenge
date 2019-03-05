import React, { Component } from 'react'
import { connect } from 'react-redux';
import classnames from 'classnames'

import { getAllCategories } from '../actions/categories'

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
    console.log(e.target.value)
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
      <form >
        <div className="form-group">
          <input 
            type="text"
            className='form-control form-control-lg'
            name="title"
            placeholder="Post Title"
            value={this.state.title}
            onChange={this.changeInput}
            id=""/>
        </div>
        <div className="form-group">
          <input 
            type="text"
            className='form-control form-control-lg' 
            name="text"
            placeholder="Post Text"
            value={this.state.text}
            onChange={this.changeInput}
            id=""/>
        </div>
        <div className="form-group">
          <input 
            type="text"
            className='form-control form-control-lg' 
            name="author"
            placeholder="Author"
            value={this.state.author}
            onChange={this.changeInput}
            id=""/>
        </div>
        <div className="form-group">
        <select
        value={this.state.category}
        className='form-control form-control-lg'
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

export default connect(mapStateToProps, { getAllCategories })(CreateForm)

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