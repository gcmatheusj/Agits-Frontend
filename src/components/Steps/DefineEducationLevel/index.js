import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, Paper, CardActionArea } from '@material-ui/core';

import img1 from "../../../assets/middle-school.png"
import img2 from "../../../assets/high-school.png";
import img3 from "../../../assets/college.png";
import img4 from "../../../assets/test.png";
import img5 from "../../../assets/other-school.png";

import education from "../../../assets/education1.png";

import CollapseDescription from './CollapseDescription';

import styles from './styles';

const names = [
  'Middle School Class',
  'High School Class',
  'College Class',
  'Test Preparation',
  'Other']

const imgs = [img1, img2, img3, img4, img5]

const details = [
  {
    description: "This template provides features that give control to the teachers in the gamified tutor (e.g., defining the course's syllabus) as well as personalized learning for the students.",
    subtitle: 'Check on below the enabled features for this template:',
    pedagogical: "Your customized tutor makes use of current intelligent techniques that model student's knowledge to accurately decide which problems it should give to students at any given time. We enable the Syllabus feature to allow you to manage the schedule and subjects on which your students will learn using the tutor.",
    evaluation: "Quick Tests: provide a quick test for your students to evaluate their learning while using the tutor. This test can be automatically generated by the tutor every time a student wants to test her current knowledge.",
    reports: "Teacher Reports: You are able to visualize reports about the interaction, learning perfomance and other interesting reports about your students."
  },
  {
    description: "This template provides features that give control to the teachers in the gamified tutor (e.g., defining the course's syllabus) as well as personalized learning for the students.",
    subtitle: 'Check on below the enabled features for this template:',
    pedagogical: "Your customized tutor makes use of current intelligent techniques that model student's knowledge to accurately decide which problems it should give to students at any given time. We enable the Syllabus feature to allow you to manage the schedule and subjects on which your students will learn using the tutor.",
    evaluation: "Quick Tests: provide a quick test for your students to evaluate their learning while using the tutor. This test can be automatically generated by the tutor every time a student wants to test her current knowledge.",
    reports: "Teacher Reports: You are able to visualize reports about the interaction, learning perfomance and other interesting reports about your students."
  },
  {
    description: "This template provides features that give control to the teachers in the gamified tutor (e.g., defining the course's syllabus) as well as personalized learning for the students.",
    subtitle: 'Check on below the enabled features for this template:',
    pedagogical: "Your customized tutor makes use of current intelligent techniques that model student's knowledge to accurately decide which problems it should give to students at any given time. We enable the Syllabus feature to allow you to manage the schedule and subjects on which your students will learn using the tutor.",
    evaluation: "Quick Tests: provide a quick test for your students to evaluate their learning while using the tutor. This test can be automatically generated by the tutor every time a student wants to test her current knowledge.",
    reports: "Teacher Reports: You are able to visualize reports about the interaction, learning perfomance and other interesting reports about your students."
  },
  {
    description: "This template provides features that give control to the teachers in the gamified tutor (e.g., defining the course's syllabus) as well as personalized learning for the students.",
    subtitle: 'Check on below the enabled features for this template:',
    pedagogical: "Your customized tutor makes use of current intelligent techniques that model student's knowledge to accurately decide which problems it should give to students at any given time. We enable the Syllabus feature to allow you to manage the schedule and subjects on which your students will learn using the tutor.",
    evaluation: "Quick Tests: provide a quick test for your students to evaluate their learning while using the tutor. This test can be automatically generated by the tutor every time a student wants to test her current knowledge.",
    reports: "Teacher Reports: You are able to visualize reports about the interaction, learning perfomance and other interesting reports about your students."
  },
  {
    description: "This template provides features that give control to the teachers in the gamified tutor (e.g., defining the course's syllabus) as well as personalized learning for the students.",
    subtitle: 'Check on below the enabled features for this template:',
    pedagogical: "Your customized tutor makes use of current intelligent techniques that model student's knowledge to accurately decide which problems it should give to students at any given time. We enable the Syllabus feature to allow you to manage the schedule and subjects on which your students will learn using the tutor.",
    evaluation: "Quick Tests: provide a quick test for your students to evaluate their learning while using the tutor. This test can be automatically generated by the tutor every time a student wants to test her current knowledge.",
    reports: "Teacher Reports: You are able to visualize reports about the interaction, learning perfomance and other interesting reports about your students."
  },
]

class DefineEducationLevel extends Component {
  state = {
    select: '',
  }

  handleSelect = event => {
    this.setState({ select: event.currentTarget.value })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography style={{ margin: 10 }} variant="subtitle1">
          Select the educational level context on which you will use the gamified tutor:
                </Typography>
        <Paper>
          <Grid className={classes.grid} container direction="row">
            {
              names.map((value, key) => {
                return (
                  <Card key={key} className={this.state.select === value ? classes.select : classes.button}>
                    <CardActionArea value={value} onClick={this.handleSelect} className={classes.cardAction}>
                      <Grid container justify="center" alignItems="center" direction="row">
                        <div>
                          <img src={imgs[key]} style={{ height: 120 }} alt="" />
                        </div>
                        <Typography variant="body1">
                          {value}
                        </Typography>
                      </Grid>
                    </CardActionArea>
                  </Card>
                )
              })
            }
          </Grid>
          <div>
            {
              names.map((value, key) => {
                return (
                  <div key={key}>
                    <CollapseDescription
                      checked={this.state.select}
                      name={names[key]}
                      img={education}
                      details={details[key]}
                    />
                  </div>
                )
              })
            }

          </div>
        </Paper>
      </div>
    )
  }
}

DefineEducationLevel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefineEducationLevel);