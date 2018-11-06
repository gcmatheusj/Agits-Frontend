import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import VerticalLinearStepper from './Stepper';
import Header from '../Header'

const styles = theme => ({
  pageTitle: {
    margin: '20px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // paddingTop: 64,
    // padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
});

function novoTutor(props) {

  const { classes } = props;
  return (
    <Header title='Customizing Tutor'>
      <Typography className={classes.pageTitle} variant="h6">
        My First Gamified Intelligent Tutor
      </Typography>
      <Divider style={styles.divider} />
      <Grid container>
        <Grid container justify="center">
          <VerticalLinearStepper />
        </Grid>
      </Grid>
    </Header>

  );
}

novoTutor.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(novoTutor);
