import React from 'react'

export default function Loading(props) {
  return (
    <div className="container pb-3 loading-size">
      <h1 className="display-4 pb-3 text-center">Loading {props.specific}...</h1>
      <div class="loader pb-3"></div>
    </div>
  )
}