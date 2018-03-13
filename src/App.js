import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import { Route, Switch, Redirect } from 'react-router-dom'

import Typography from 'material-ui/Typography'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Hidden from 'material-ui/Hidden'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import Divider from 'material-ui/Divider'
import OverallLeaderboard from './OverallLeaderboard'
import Links from './Links'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { sideBarOpen: false, year: 2018 }
  }
  toggleMenu = () => {
    this.setState({ sideBarOpen: !this.state.sideBarOpen })
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <div>
          <Hidden smDown>
            <Drawer open={true} className={classes.drawer} variant="permanent">
              <Links year={this.state.year} />
            </Drawer>
          </Hidden>
          <Hidden mdUp>
            <Drawer open={this.state.sideBarOpen} className={classes.drawer} variant="persistent">
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.toggleMenu}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <Links year={this.state.year} />
            </Drawer>
          </Hidden>
        </div>
        <AppBar>
          <Toolbar>
            <Hidden mdUp>
              <IconButton color="contrast" onClick={this.toggleMenu}>
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="title" color="inherit" className={classes.logo} noWrap>
              ScoreBoard
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.contentContainer} content="true">
          <Switch>
            <Route exact path="/:year/leaderboard" component={OverallLeaderboard} />
            <Redirect to={`${this.state.year}/leaderboard`} />
          </Switch>
        </div>
      </div>
    )
  }
}

const styles = theme => {
  return {
    contentContainer: {
      flex: '1 0 auto',
      [theme.breakpoints.up('md')]: {
        marginLeft: 250
      },
      marginTop: 75,
      paddingLeft: 10
    },
    drawer: {
      width: 250,
      maxWidth: 250,
      color: theme.palette.text.secondary
    },
    logo: {
      [theme.breakpoints.up('md')]: {
        marginLeft: 250
      }
    }
  }
}

export default withStyles(styles)(App)
