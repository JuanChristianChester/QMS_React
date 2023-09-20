import React from 'react'

class Page extends React.Component {
  constructor (props) {
    super(props)
    this.state = { apiResponse: [] }
  }

  callAPI (url) {
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }))
    return this.apiResponse
  }
}

export default Page
