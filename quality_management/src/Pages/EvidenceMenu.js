import React from 'react'
import OverviewFlow from './Elements/OverviewFlow'
import Page from './Page'

class EvidenceMenu extends Page {
  constructor (props) {
    super(props)
    this.state = { apiResponse: '' }
  }

  render () {
    return (
      <div className='flowchart-content'>
        <div className='flowchart-title'>
          <h2>Evidence Menu</h2>
        </div>

        <OverviewFlow />
      </div>
    )
  }
}

export default EvidenceMenu
