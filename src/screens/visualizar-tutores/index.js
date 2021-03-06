import React from 'react';
import { Link } from 'react-router-dom';
import {
  withStyles, Grid, Divider, Typography, Fab, Tooltip, IconButton,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';

import CardTutor from './CardTutor';

import styles from './styles';

// precisa estar no redux
const tutors = [
  {
    id: 0,
    name: 'Basic math for 9th graders students',
    studentsNumber: '12',
    abstract:
      'Functions, geometry, equations, trigonometry, and others 10 subjects with performance gamification method and teacher reports.',
  },
  {
    id: 1,
    name: 'Lorem Ipsum 1 is simply dummy text',
    studentsNumber: '4',
    abstract:
      'Abstract of tutor 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 2,
    name: 'Lorem Ipsum 2 is simply dummy text',
    studentsNumber: '9',
    abstract:
      'Abstract of tutor 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

function VisualizarTutores(props) {
  const { classes } = props;

  return (
    <>
      <Grid container direction="row" justify="space-between" alignItems="center" className={classes.title}>
        <Grid item>
          <Typography variant="h6">
            Aqui estão todos os tutores criados por você!
          </Typography>
        </Grid>
        <Grid item>
          <Tooltip title="Criar um novo tutor">
            <Fab color="primary" aria-label="Add" component={Link} to="/criar-tutor">
              <AddIcon />
            </Fab>
          </Tooltip>
        </Grid>
      </Grid>
      <Divider style={styles.divider} />
      <Grid className={classes.grid} container>
        <Grid container direction="row">
          {tutors.map(v => (
            <CardTutor
              key={v.id}
              tutor={v}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
}

VisualizarTutores.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VisualizarTutores);
