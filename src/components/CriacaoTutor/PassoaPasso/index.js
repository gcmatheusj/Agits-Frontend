import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import VerticalLinearStepper from './Stepper';
import Header from '../../Header';

import styles from './styles';

class novoTutor extends Component {

  componentDidMount() {
    window.sessionStorage.setItem('StartedScratch', Date(Date.now()))
  }

  componentWillUnmount(){
    window.sessionStorage.setItem('FinishedScratch', Date(Date.now()))
  }

  render() {
    const { classes } = this.props;
    return (
      <Header title='AGITS'>
        <Typography className={classes.pageTitle} variant="h6">
          Customizando Tutor
      </Typography>
        <Divider />
        <Grid container>
          <Grid container justify="center">
            <VerticalLinearStepper />
          </Grid>
        </Grid>
      </Header>
    )
  }
}

novoTutor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(novoTutor);
