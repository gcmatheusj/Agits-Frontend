import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import {
  Typography,
  Divider,
  Grid,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  IconButton,
  CardHeader,
  ListItem,
  ListItemText,
  ListSubheader,
  List,
} from '@material-ui/core';
import { Settings } from '@material-ui/icons';

import styles from './styles';

const tutor = {
  id: 0,
  name: 'Basic math for 9th graders students',
  strongSkills: [
    { name: 'Topic 2: Lorem Ipsun', level: 5 },
    { name: 'Topic 4: Lorem Ipsum dolor sit amet', level: 3 },
    { name: 'Topic 6: Lorem Ipsum dolor sit amet, consectetur adipiscing elit.', level: 4 },
    { name: 'Topic 8: Lorem Ipsum Proin volutpat pulvinar dapibus', level: 2 },
    { name: 'Topic 9: Lorem Ipsum Proin volutpat pulvinar dapibus', level: 6 },
  ],
  weakSkills: [
    { name: 'Topic 3: Lorem Ipsun', level: 5 },
    { name: 'Topic 5: Lorem Ipsum dolor sit amet', level: 3 },
    { name: 'Topic 7: Lorem Ipsum dolor sit amet, consectetur adipiscing elit.', level: 4 },
    { name: 'Topic 10: Lorem Ipsum Proin volutpat pulvinar dapibus', level: 2 },
  ],
  tests: [
    {
      id: 0,
      name: 'Test Functions',
      hits: 10.0,
      error: 5.0,
      grade: 8.0,
      date: '23/11/2018',
    },
    {
      id: 1,
      name: 'Test Functions',
      hits: 10.0,
      error: 5.0,
      grade: 8.0,
      date: '23/11/2018',
    },
    {
      id: 2,
      name: 'Test Functions',
      hits: 10.0,
      error: 5.0,
      grade: 8.0,
      date: '23/11/2018',
    },
    {
      id: 3,
      name: 'Test Functions',
      hits: 10.0,
      error: 5.0,
      grade: 8.0,
      date: '23/11/2018',
    },
    {
      id: 4,
      name: 'Test Functions',
      hits: 10.0,
      error: 5.0,
      grade: 8.0,
      date: '23/11/2018',
    },
  ],
};

class Tutor extends Component {
  state = {
    name: 'Nome: ',
  };

  render() {
    const { classes } = this.props;
    const { name } = this.state;
    return (
      <>
        <Typography className={classes.title} variant="h6">
          {name + tutor.name}
        </Typography>
        <Divider />
        <Grid container spacing={16}>
          <Grid item xs={9}>
            <Grid container direction="column" spacing={24} className={classes.grid}>
              <Grid item>
                <Paper className={classes.paper}>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Test</TableCell>
                        <TableCell>Average Hits</TableCell>
                        <TableCell>Average Error</TableCell>
                        <TableCell>Average Grade</TableCell>
                        <TableCell>Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tutor.tests.map(test => (
                        <TableRow key={test.id}>
                          <TableCell component="th" scope="row">
                            {test.name}
                          </TableCell>
                          <TableCell>{test.hits}</TableCell>
                          <TableCell>{test.error}</TableCell>
                          <TableCell>{test.grade}</TableCell>
                          <TableCell>{test.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </Grid>
              <Grid item>
                <Grid container spacing={24}>
                  <Grid item xs>
                    <Card className={classes.paper}>
                      <CardContent className={classes.strong}>
                        <Grid container direction="column" alignItems="center">
                          <Typography className={classes.top} variant="h3" gutterBottom>
                            {tutor.strongSkills.length}
                          </Typography>
                          <Typography className={classes.top} variant="h6" gutterBottom>
                            STRONG SKILLS
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
                            {tutor.strongSkills.map(skill => (
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
                        {/* <Grid container spacing={8} className={classes.gridCard}>
                          {tutor.strongSkills.map(skill => (
                            <>
                              <Grid item xs={10}>
                                <Typography variant="body1">{skill.name}</Typography>
                              </Grid>
                              <Grid item xs={2}>
                                <Typography variant="body1">{skill.level}</Typography>
                              </Grid>
                            </>
                          ))}
                        </Grid> */}
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <Card className={classes.paper}>
                      <CardContent className={classes.weak}>
                        <Grid container direction="column" alignItems="center">
                          <Typography className={classes.top} variant="h3" gutterBottom>
                            {tutor.weakSkills.length}
                          </Typography>
                          <Typography className={classes.top} variant="h6" gutterBottom>
                            WEAK SKILLS
                          </Typography>
                        </Grid>
                      </CardContent>
                      <CardContent className={classes.content}>
                        <Grid container spacing={8} className={classes.gridCard}>
                          <Grid item xs={10}>
                            <Typography variant="title">Skill</Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography variant="title">Level</Typography>
                          </Grid>
                        </Grid>
                        <Divider />
                        <Grid container spacing={8} className={classes.gridCard}>
                          {tutor.weakSkills.map(skill => (
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
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            Students
          </Grid>
        </Grid>
      </>
    );
  }
}

Tutor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tutor);
