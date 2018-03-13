import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import { Home } from 'material-ui-icons'

export class ScoreboardLinks extends Component {
  render() {
    const { year, classes } = this.props
    return (
      <List className={classes.links}>
        <Link to={`/${year}/leaderboard`}>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Overall" />
          </ListItem>
        </Link>
      </List>
    )
  }
}

const styles = theme => {
  return {
    links: {
      width: 250,
      flex: 'initial'
    }
  }
}

export default withStyles(styles)(ScoreboardLinks)
