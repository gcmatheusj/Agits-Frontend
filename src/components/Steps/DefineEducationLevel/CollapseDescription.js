import React, { Component } from 'react'
import { Collapse, Typography, Grid, Divider } from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  
})

class CollapseDescription extends Component {
  render() {
    const { classes } = this.props
    return (
      <Collapse in={this.props.checked === this.props.name} >
        <div style={{ padding: 20, paddingTop: 0 }}>
          <Divider />
          <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: 10 }}>
            {this.props.name}
          </Typography>
          <Typography>
            {this.props.details.description}
          </Typography>
          <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
            {this.props.details.subtitle}
          </Typography>
          <Grid container className={classes.grid} justify="center" alignItems='center'>
              <img className={classes.imgCollapse} src={this.props.img} alt="" />
            <Grid item xs>
              <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                - Modelo pedagógico
              </Typography>
              <Typography>
                {this.props.details.pedagogical}
              </Typography>
              <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                - Métodos avaliativos
              </Typography>
              <Typography>
                {this.props.details.evaluation}
              </Typography>
              <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                - Relatórios
              </Typography>
              <Typography>
                {this.props.details.reports}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Collapse>
    )
  }
}

CollapseDescription.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CollapseDescription)