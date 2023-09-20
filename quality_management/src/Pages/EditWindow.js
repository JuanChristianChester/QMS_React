import React from 'react'
import Page from './Page'

class EditWindow extends Page {
  constructor (props) {
    super(props)
    this.state = {
      // Initialize state variables if needed
    }
  }

  render () {
    return (
      <div className='content'>
        <h2>EditWindow</h2>
      </div>
    )
  }
}

export default EditWindow
