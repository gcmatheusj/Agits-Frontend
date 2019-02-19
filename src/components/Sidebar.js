import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Background from '../assets/imagem_fundo_filtro.png';
import logo from '../assets/meu-tutor.png';

const styles = theme => ({
  root: {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    userSelect: 'none',
  },
  grid: {
    alignItems: 'center',
  },
  button: {
    borderColor: '#ff572f',
    color: '#ff572f',
    verticalAlign: 'middle',
    border: '2px solid',
    padding: '1px',
  },
  content: {
    margin: 70,
    color: 'white',
    userSelect: 'none',
  },
});

function Sidebar(props) {
  const { classes } = props;

  return (
    <Grid className={classes.root} container>
      <Grid className={classes.grid} container justify="center" direction="row">
        <div className="container">
          <div className="content">
            <div align="center">
              <img src={logo} alt="" />
            </div>
            <Typography className={classes.content} variant="h4" align="center">
              LOREM IPSUM PORTTITOR AENEAN TACITI SCELERISQUE TEMPUS DONEC.
            </Typography>
            <div align="center">
              <Button
                id="btn-ln"
                className={classes.button}
                variant="outlined"
                size="large"
                color="primary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(Sidebar);
