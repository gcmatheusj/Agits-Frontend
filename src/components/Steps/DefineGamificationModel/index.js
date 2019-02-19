import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import GamificationType from './GamificationType'

const styles = theme => ({
  title: {
    padding: 1,
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
});

const name = ['participation', 'performance', 'competition', 'enjoyment', 'exploration', 'effectiveness']

class DefineGamificationModel extends Component {

  state = {
    select: ''
  }

  handleSelect = event => {
    this.setState({ select: event.currentTarget.value })
  }

  render() {
    const { classes } = this.props;

    return (
      <div style={{ justifyContent: 'center' }}>
        <Typography className={classes.title} variant="subtitle1">
          Qual é o comportamento principal que você espera de seus alunos quando eles estão aprendendo no tutor gamificado?
        </Typography>

        {name.map((value, key) => {
          return (
            <GamificationType
              name={value}
              key={key}

              handleSelect={this.handleSelect}
              select={this.state.select}
            />
          )
        })}
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
