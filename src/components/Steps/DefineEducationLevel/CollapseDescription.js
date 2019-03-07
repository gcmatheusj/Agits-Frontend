import React from 'react';
import {
  Collapse, Typography, Grid, Divider,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { collapse as styles } from './styles';

const CollapseDescription = (props) => {
  const {
    classes, checked, name, details, img,
  } = props;
  return (
    <Collapse in={checked === name}>
      <div style={{ padding: 20, paddingTop: 0 }}>
        <Divider />
        <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: 10 }}>
          {name}
        </Typography>
        <Typography>{details.description}</Typography>
        <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
          {details.subtitle}
        </Typography>
        <Grid container className={classes.grid} justify="center" alignItems="center">
          <img className={classes.imgCollapse} src={img} alt="" />
          <Grid item xs>
            <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
              - Modelo pedagógico
            </Typography>
            <Typography>{details.pedagogical}</Typography>
            <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
              - Métodos avaliativos
            </Typography>
            <Typography>{details.evaluation}</Typography>
            <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
              - Relatórios
            </Typography>
            <Typography>{details.reports}</Typography>
          </Grid>
        </Grid>
      </div>
    </Collapse>
  );
};

CollapseDescription.propTypes = {
  classes: PropTypes.object.isRequired,
  checked: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired,
  img: PropTypes.any.isRequired,
};

export default withStyles(styles)(CollapseDescription);
