import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import VerticalLinearStepper from './Stepper';

import styles from './styles';

const NovoTutor = (props) => {
  const { classes } = props;
  return (
    <>
      <Typography className={classes.pageTitle} variant="h6">
        Customizando Tutor
      </Typography>
      <Divider />
      <Grid container>
        <Grid container justify="center">
          <VerticalLinearStepper />
        </Grid>
      </Grid>
    </>
  );
};

NovoTutor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NovoTutor);
