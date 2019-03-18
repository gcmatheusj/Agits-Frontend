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
import { Link } from 'react-router-dom';

import IconSettings from '@material-ui/icons/Settings';

import styles from './styles';

const CardTutor = (props) => {
  const {
    classes, tutor,
  } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to="/dashboard/tutor">
        <CardContent className={classes.media}>
          <Typography className={classes.top} variant="h6" gutterBottom>
            {' '}
            {tutor.name}
            {' '}
          </Typography>
          <Typography className={classes.top} variant="subtitle1" gutterBottom>
            {' '}
            {tutor.studentsNumber}
            {' '}
students
            {' '}
          </Typography>
        </CardContent>
        <CardContent className={classes.content}>
          <Typography component="p">{tutor.abstract}</Typography>
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
  classes: PropTypes.object.isRequired,
  tutor: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardTutor);
