import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, Paper, CardActionArea, Divider } from '@material-ui/core';

import img1 from "../../../assets/middle-school.png"
import img2 from "../../../assets/high-school.png"
import img3 from "../../../assets/college.png"
import img4 from "../../../assets/test.png"
import img5 from "../../../assets/other-school.png"

import education from "../../../assets/education1.png"
import syllabus from "../../../assets/syllabus.png"
import quick from "../../../assets/quick-test.png"
import teacher from "../../../assets/teacher-reports.png"


const styles = theme => ({
    root: {
        width: '100%',
    },
    select: {
        boxShadow: '0 0 9px #1976d2, 0 0 15px #1976d2'
    },
    grid: {
        width: '100%'
    },
    button: {
        margin: 20,
        width: 180,
    },
    cardAction: {
        padding: 10,
    },
    media: {
        height: 120,
        width: 150,
        marginBottom: 20
    },
    img: {
        padding: 20
    }
});

const names = [
    'Middle School Class',
    'High School Class',
    'College Class',
    'Test Preparation',
    'Other']

const imgs = [img1, img2, img3, img4, img5]

class DefineEducationLevel extends Component {
    state = {
        select: ''
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
                    <Grid className={classes.grid} container justify="space-between" direction="row">
                        {
                            names.map((value, key) => {
                                return (
                                    <Card key={key} className={[classes.button, this.state.select === value ? classes.select : '']}>
                                        <CardActionArea value={value} onClick={this.handleSelect} className={classes.cardAction}>
                                            <Grid container justify="center" alignItems="center" direction="row">
                                                <div>
                                                    <img src={imgs[key]} style={{ height: 120, width: 150 }} alt="" />
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
                    <div style={{ padding: 20, paddingTop: 0 }}>
                        <Divider />
                        <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: 10 }}>
                            Middle School Class
                        </Typography>
                        <Typography>
                            This template provides features that give control to the teachers in the gamified tutor (e.g., defining the course's syllabus) as well as personalized learning for the students.
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontWeight: 'bold'}}>
                            Check on below the enabled features for this template:
                        </Typography>
                        <Grid container direction="row" justify="flex-start">
                            <img style={{maxWidth: '25%', width: 230, height: 230}} src={education} alt=""/>
                            <div style={{ maxWidth: '75%' }}>
                                <Typography variant="subtitle2" style={{ fontWeight: 'bold'}}>
                                    - Pedagogical Model
                                </Typography>
                                <Typography>
                                    Your customized tutor makes use of current intelligent techniques that model student's knowledge to accurately decide which problems it should give to students at any given time. We enable the Syllabus feature to allow you to manage the schedule and subjects on which your students will learn using the tutor.
                                </Typography>
                                <Typography variant="subtitle2" style={{ fontWeight: 'bold'}}>
                                    - Evaluation Methods
                                </Typography>
                                <Typography>
                                    Quick Tests: provide a quick test for your students to evaluate their learning while using the tutor. This test can be automatically generated by the tutor every time a student wants to test her current knowledge.
                                </Typography>
                                <Typography variant="subtitle2" style={{ fontWeight: 'bold'}}>
                                    - Reports
                                </Typography>
                                <Typography>
                                    Teacher Reports: You are able to visualize reports about the interaction, learning perfomance and other interesting reports about your students.
                                </Typography>
                                </div>
                            </Grid>
                       
                    </div>
                </Paper>
                {/**
                    <Card style={{ marginTop: 20, width: 960 }}>
                        <Grid container direction="row">
                            <Card>
                                <Grid style={{ padding: 20, textAlign: "center", width: 320 }}>
                                    <Typography variant="h6" gutterBottom>
                                        Pedagogical Model
                                    </Typography>
                                    <Grid container direction="row">
                                        <Grid style={{ width: "50%" }}>
                                            <img src={curriculum} className={classes.img} alt="" />
                                            <Typography>Knowledge tracing and curriculum sequencing</Typography>
                                        </Grid>
                                        <Grid style={{ width: "50%" }}>
                                            <img src={syllabus} className={classes.img} alt="" />
                                            <Typography>Syllabus</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Card>
                            <Card>
                                <Grid style={{ padding: 20, textAlign: "center", width: 320 }}>
                                    <Typography variant="h6" gutterBottom>
                                        Evaluation Methods
                                    </Typography>
                                    <Grid>
                                        <img src={quick} className={classes.img} alt="" />
                                        <Typography>Quick Test</Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                            <Card>
                                <Grid style={{ padding: 20, textAlign: "center", width: 320 }}>
                                    <Typography variant="h6" gutterBottom>
                                        Reports Types
                                    </Typography>
                                    <Grid>
                                        <img src={teacher} className={classes.img} alt="" />
                                        <Typography>Teacher Reports</Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Card>
                 */}
            </div>
        )
    }
}

DefineEducationLevel.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(DefineEducationLevel);