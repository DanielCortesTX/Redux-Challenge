import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAllCategories } from '../actions/categories'

class Home extends Component {
  componentDidMount(){
    this.props.getAllCategories()
  }
  render() {
    const { categories, categoriesLoading } = this.props
    let categoryFeed

    if(categories === null || categoriesLoading){
      categoryFeed = <h1 className="display-4">Loading</h1>
    } else {
      categoryFeed = categories.map((category, index) => <h3 key={index}>{category.name}</h3>)
    }
    return (
      <div>
        <h1>Home page</h1>
        {categoryFeed}
      </div>
    )
  }
}

const mapStateToProps = ({category}) => {
  return {
    categories: category.allCategories,
    categoriesLoading: category.loading
  }
}

export default connect(mapStateToProps, { getAllCategories })(Home)