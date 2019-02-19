import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Header from './Header';
import RecuperarSenhaContainer from './RecuperarSenha';

const styles = () => ({
  root: {
    height: '90vh',
    display: 'flex',
  },
});

function RecuperarSenha(props) {
  const { classes } = props;
  return (
    <Grid container>
      <Header />
      <Grid className={classes.root} container>
        <RecuperarSenhaContainer />
      </Grid>
    </Grid>
  );
}

RecuperarSenha.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(RecuperarSenha);
