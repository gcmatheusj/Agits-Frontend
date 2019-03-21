import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Card, CardContent, Typography, Grid, Divider, withStyles, List,
} from '@material-ui/core';

import styles from './styles';

class StrongWeak extends Component {
  render() {
    const { classes, skills, type } = this.props;
    return (
      <Card className={classes.paper}>
        <CardContent className={type === 'STRONG' ? classes.strong : classes.weak}>
          <Grid container direction="column" alignItems="center">
            <Typography className={classes.top} variant="h3" gutterBottom>
              {skills.length}
            </Typography>
            <Typography className={classes.top} variant="h6" gutterBottom>
              {type}
              {' '}
SKILLS
            </Typography>
          </Grid>
        </CardContent>
        <CardContent className={classes.content}>
          <Grid container spacing={8} className={classes.gridCard}>
            <Grid item xs={9}>
              <Typography variant="title">Skill</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="title">Level</Typography>
            </Grid>
          </Grid>
          <Divider />
          <List className={classes.list}>
            <Grid container spacing={8} className={classes.gridCard}>
              {skills.map(skill => (
                <>
                  <Grid item xs={10}>
                    <Typography variant="body1">{skill.name}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="body1">{skill.level}</Typography>
                  </Grid>
                </>
              ))}
            </Grid>
          </List>
        </CardContent>
      </Card>
    );
  }
}

StrongWeak.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StrongWeak);
