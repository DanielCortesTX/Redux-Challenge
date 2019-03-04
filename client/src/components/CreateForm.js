import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateForm extends Component {
  state = {
    title: '',
    text: '',
    author: '',
    category: 'none'
  }
  categoryChange(e) {
    this.setState({
      category: e.target.value
    })
  }
  render() {
    const { categories } = this.props

    let commentForm
    if(categories === null){
      commentForm = <h1>Loading</h1>
    } else {
      commentForm = <select
      defaultValue='none'>{
      categories.map((category, index) => (<option
        value={category.name} 
        key={index}
        defaultValue='none'
      >{category.name}</option>))}
      </select>
    }

    return (
      <div>
        {commentForm}
      </div>
    )
  }
}

const mapStateToProps = ({ category }) => {
  let categories = category.allCategories.concat({name: 'none'})
  return {
    categories: categories
  }
}

export default connect(mapStateToProps)(CreateForm)

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