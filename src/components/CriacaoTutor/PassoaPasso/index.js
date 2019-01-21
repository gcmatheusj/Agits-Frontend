import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import VerticalLinearStepper from './Stepper';
import Header from '../../Header'

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
    height: '100vh',
    overflow: 'auto',
  },
});

function novoTutor(props) {

  const { classes } = props;
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

  );
}

novoTutor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(novoTutor);
