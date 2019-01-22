import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import logo from '../../assets/meu-tutor.png';

import styles from './styles';

function Header(props) {
  const { classes } = props;

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          <img className={classes.logo} src={logo} alt="" />
        </Typography>
        <Grid container justify="flex-end">
          <Typography className={classes.label} variant="subtitle1" color="inherit">
            Don&apos;t have an account?
          </Typography>
          <Button className={classes.button} size="small" variant="contained">
            Get Started
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.shape.isRequired,
};
export default withStyles(styles)(Header);
