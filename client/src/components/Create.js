import React, { Component } from 'react'
import CreateForm from './CreateForm'

export default class Create extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4 center-item">Create page</h1>
        <CreateForm />
      </div>
    )
  }
}
