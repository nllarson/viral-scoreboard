import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import { ListItem, ListItemText, ListItemAvatar, ListItemSecondaryAction } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'
import { ExpandMore, ExpandLess, PersonOutline } from 'material-ui-icons'
import AthleteScoreboard from './AthleteScoreboard'

export class LeaderboardEntry extends Component {
  render() {
    const { entry, rank, classes } = this.props
    return (
      <Paper>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Grid container direction="row">
              <Grid item xs={1}>
                {rank}
              </Grid>
              <Grid item xs={11}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonOutline />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${entry.name} (${entry.team})`}
                    secondary={`${entry.age}${entry.gender} - ${entry.points}pts`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="More">
                      {/* <ExpandMore /> */}
                      <ExpandLess />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="row" justify="flex-end" alignItems="flex-start">
              <Grid item xs={10}>
                <AthleteScoreboard scores={entry.scores} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

LeaderboardEntry.propTypes = {
  entry: PropTypes.objectOf(
    PropTypes.shape({
      athleteId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      team: PropTypes.bool,
      teamId: PropTypes.number,
      age: PropTypes.number,
      points: PropTypes.number.isRequired,
      gender: PropTypes.oneOf(['M', 'F'])
    })
  ),
  rank: PropTypes.number
}

LeaderboardEntry.defaultProps = {
  entry: {}
}

const styles = theme => {
  return {}
}

export default withStyles(styles)(LeaderboardEntry)
