import React, { Component } from 'react';
import {
  Grid, Card, Typography, Divider, ButtonBase, Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import GamificationType from './GamificationType'

const styles = theme => ({
  title: {
    padding: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
});

const name = ['participation', 'performance', 'competition', 'enjoyment', 'exploration', 'effectiveness']

class DefineGamificationModel extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div style={{ justifyContent: 'center' }}>
        <Typography className={classes.title} variant="subtitle1">
          What is the main behavior do you expect from your students when they are learning in the
          gamifed tutor?
        </Typography>
        
        {name.map((value, key) => <GamificationType name={value} key={key} />)}

      </div>
    );
  }
}

DefineGamificationModel.propTypes = {
  classes: PropTypes.object,
};

/**
 *Quando conectado com o Redux utilizar a seguinte abordagem:
 *export default withStyles(styles)(connect(props...)(DefineGamificationModel))
*/
export default withStyles(styles)(DefineGamificationModel);
