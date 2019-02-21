import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';

import { news as styles } from './styles';

const NewsActivities = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.cardNewsActivities}>
      <CardContent>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          Last News
        </Typography>
        <div>
          <Typography variant="subtitle1">Student 01 performed the ACTIVITYNAME</Typography>
          <Divider />
          <Typography variant="subtitle1">Student 02 performed the ACTIVITYNAME</Typography>
          <Divider />
          <Typography variant="subtitle1">Student 03 performed the ACTIVITYNAME</Typography>
          <Divider />
          <Typography variant="subtitle1">Student 04 performed the ACTIVITYNAME</Typography>
          <Divider />
          <Typography variant="subtitle1">Student 05 performed the ACTIVITYNAME</Typography>
          <Divider />
          <CardActions>
            <Grid container justify="flex-end">
              <Button size="medium" style={{ color: '#ff572f' }}>
                Show All News
              </Button>
            </Grid>
          </CardActions>
        </div>
        <Divider />
        <Typography variant="h6">Next Activities</Typography>
        <div>
          <Typography variant="subtitle1">Student 01 performed the ACTIVITYNAME</Typography>
          <Divider />
          <Typography variant="subtitle1">Student 02 performed the ACTIVITYNAME</Typography>
          <Divider />
          <Typography variant="subtitle1">Student 03 performed the ACTIVITYNAME</Typography>
          <Divider />
          <Typography variant="subtitle1">Student 04 performed the ACTIVITYNAME</Typography>
          <Divider />
          <Typography variant="subtitle1">Student 05 performed the ACTIVITYNAME</Typography>
          <Divider />
          <CardActions>
            <Grid container justify="flex-end">
              <Button size="medium" style={{ color: '#ff572f' }}>
                Show All News
              </Button>
            </Grid>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
};

NewsActivities.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(NewsActivities);
