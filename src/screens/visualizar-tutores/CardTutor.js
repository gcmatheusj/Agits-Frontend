import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';

import IconSettings from '@material-ui/icons/Settings';

import styles from './styles';

const CardTutor = (props) => {
  const {
    classes, name, studentsNumber, abstract,
  } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent className={classes.media}>
          <Typography className={classes.top} variant="h6" gutterBottom>
            {' '}
            {name}
            {' '}
          </Typography>
          <Typography className={classes.top} variant="subtitle1" gutterBottom>
            {' '}
            {studentsNumber}
            {' '}
students
            {' '}
          </Typography>
        </CardContent>
        <CardContent className={classes.content}>
          <Typography component="p">{abstract}</Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <Grid container direction="row" justify="flex-end">
        <CardActions>
          <IconButton>
            <IconSettings className={classes.iconSettings} />
          </IconButton>
        </CardActions>
      </Grid>
    </Card>
  );
};

CardTutor.propTypes = {
  classes: PropTypes.shape.isRequired, // Corrigir tipo da prop
  name: PropTypes.string.isRequired,
  studentsNumber: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
};

export default withStyles(styles)(CardTutor);
