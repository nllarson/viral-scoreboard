import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import List from 'material-ui/List'
import Typography from 'material-ui/Typography'
import LeaderboardEntry from './LeaderboardEntry'

export class Leaderboard extends Component {
  render() {
    const { name, description, entries, classes } = this.props
    return (
      <Grid container direction="column">
        <Grid item xs={12}>
          <Typography variant="title" gutterBottom align="center">
            {name}
          </Typography>
          {description && (
            <Typography variant="caption" gutterBottom align="center">
              {description}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <List>
            {entries
              .sort((a, b) => {
                return a.points - b.points
              })
              .map((entry, index) => {
                return <LeaderboardEntry key={index} entry={entry} rank={index + 1} />
              })}
          </List>
        </Grid>
      </Grid>
    )
  }
}

Leaderboard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  entries: PropTypes.array
}

Leaderboard.defaultProps = {
  entries: [],
  name: '',
  description: ''
}

const styles = theme => {
  return {}
}

export default withStyles(styles)(Leaderboard)
