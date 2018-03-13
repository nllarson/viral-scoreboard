import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Collapse from 'material-ui/transitions/Collapse'
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table'

export class AthleteScoreboard extends Component {
  render() {
    const { scores, classes } = this.props
    return (
      <Collapse in={true} timeout="auto" unmountOnExit>
        <Table>
          <TableBody>
            {scores.map((score, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{score.name}</TableCell>
                  <TableCell numeric>{score.division === 'S' ? 'Scaled' : 'Rx'}</TableCell>
                  <TableCell numeric>{`${score.score} ${score.tiebreak && '(' + score.tiebreak + ')'}`}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Collapse>
    )
  }
}

AthleteScoreboard.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      division: PropTypes.oneOf(['S', 'R']).isRequired,
      score: PropTypes.string.isRequired,
      tiebreak: PropTypes.string
    }).isRequired
  )
}

AthleteScoreboard.defaultProps = {
  scores: []
}

const styles = theme => {
  return {}
}

export default withStyles(styles)(AthleteScoreboard)
