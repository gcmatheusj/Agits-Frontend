import React, { Fragment } from 'react';
import {
  withStyles, Grid, Divider, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import CardTutor from './CardTutor';
import Header from '../../components/Header';

import styles from './styles';

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
    <Fragment>
      <Header title="AGITS">
        <Typography className={classes.pageTitle} variant="h6">
          Painel de Controle
        </Typography>
        <Divider style={styles.divider} />
        <Grid className={classes.grid} container direction="row">
          {tutors.map(v => (
            <CardTutor
              key={v.id}
              name={v.name}
              studentsNumber={v.studentsNumber}
              abstract={v.abstract}
            />
          ))}
        </Grid>
      </Header>
    </Fragment>
  );
}

VisualizarTutores.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VisualizarTutores);
