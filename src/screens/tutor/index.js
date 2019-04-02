/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import {
  Typography,
  Divider,
  Grid,
  Tooltip,
  Fab,
  IconButton,
} from '@material-ui/core';
import { Settings, ArrowBack } from '@material-ui/icons';

import Students from '../../components/Students';
import TableTests from '../../components/TableTests';
import StrongWeak from '../../components/StrongWeak';

import styles from './styles';
import Tabs from '../../components/Tabs';

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
  students: [
    {
      avatar: '',
      name: 'Henrique Couto',
    },
    {
      avatar: '',
      name: 'José Matheus',
    },
    {
      avatar: '',
      name: 'Daniel Gomes',
    },
    {
      avatar: '',
      name: 'Ítalo Lima',
    },
    {
      avatar: '',
      name: 'Ari Barros',
    },
    {
      avatar: '',
      name: 'Henrique Couto',
    },
    {
      avatar: '',
      name: 'José Matheus',
    },
    {
      avatar: '',
      name: 'Daniel Gomes',
    },
    {
      avatar: '',
      name: 'Ítalo Lima',
    },
    {
      avatar: '',
      name: 'Ari Barros',
    },
    {
      avatar: '',
      name: 'Henrique Couto',
    },
    {
      avatar: '',
      name: 'José Matheus',
    },
    {
      avatar: '',
      name: 'Daniel Gomes',
    },
    {
      avatar: '',
      name: 'Ítalo Lima',
    },
    {
      avatar: '',
      name: 'Ari Barros',
    },
  ],
};

class Tutor extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid container direction="row" justify="space-between" alignItems="center" className={classes.title}>
          <Grid item>
            <Grid container direction="row" alignItems="center">
              <Tooltip title="Voltar">
                <IconButton color="primary" aria-label="Back" component={Link} to="/" style={{ marginRight: 10 }}>
                  <ArrowBack />
                </IconButton>
              </Tooltip>
              <Typography variant="h6">
                {tutor.name}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Tooltip title="Configurar tutor">
              <Fab color="primary" aria-label="Setting">
                <Settings />
              </Fab>
            </Tooltip>
          </Grid>
        </Grid>
        <Divider />
        <Tabs tutor={tutor} />
        {/* <Grid container spacing={16} className={classes.grid}>
          <Grid item xs={9}>
            <Grid container direction="column" spacing={16}>
              <Grid item>
                <TableTests tutor={tutor} />
              </Grid>
              <Grid item>
                <Grid container spacing={16}>
                  <Grid item xs>
                    <StrongWeak type="STRONG" skills={tutor.strongSkills} />
                  </Grid>
                  <Grid item xs>
                    <StrongWeak type="WEAK" skills={tutor.weakSkills} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Students students={tutor.students} />
          </Grid>
        </Grid> */}
      </>
    );
  }
}

Tutor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tutor);
