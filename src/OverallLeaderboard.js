import React, { Component } from 'react'
import Leaderboard from './Leaderboard'

export default class OverallLeaderboard extends Component {
  constructor(props) {
    super(props)
    this.state = { year: props.match.params.year, entries: [{ all: [] }] }
  }

  componentDidMount() {
    fetch(`/leaderboards/${this.state.year}/overall`)
      .then(results => {
        return results.json()
      })
      .then(data => {
        this.setState((prevState, props) => {
          return { ...prevState, entries: data[0] }
        })
      })
  }

  render() {
    console.log(this.state)
    return (
      <Leaderboard
        entries={this.state.entries.all}
        name={`${this.state.year} - Overall Leaderboard`}
        description={`${this.state.year} Full Leaderboard`}
      />
    )
  }
}
