import React, { Component } from 'react';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, Typography, Grid, Card, Button, Divider } from '@material-ui/core';
//import ActionCreators from '../../../redux/actions/tutor';

import img1 from "../../../assets/middle-school.png"
import img2 from "../../../assets/high-school.png"
import img3 from "../../../assets/college.png"
import img4 from "../../../assets/test.png"
import img5 from "../../../assets/other-school.png"

import curriculum from "../../../assets/curriculum.png"
import syllabus from "../../../assets/syllabus.png"
import quick from "../../../assets/quick-test.png"
import teacher from "../../../assets/teacher-reports.png"


const styles = theme => ({
    root: {
        width: '100%',
    },
    button: {
        width: 180,
        height: 180,
        margin: 8,
        marginBottom: 10
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
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container direction="row" spacing={16}>
                    {
                        names.map((value, key) => {
                            return (
                                <Grid>
                                    <Button className={classes.button}>
                                        <Grid container direction="column">
                                            <div >
                                                <img src={imgs[key]} style={{ height: 120, width: 150 }} />
                                            </div>
                                            <Typography variant="body1">
                                                {value}
                                            </Typography>
                                        </Grid>
                                    </Button>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Divider />

                <Card style={{ marginTop: 20, width: 960 }}>
                    <Grid container direction="row">
                        <Card>
                            <Grid style={{ padding: 20, textAlign: "center", width: 320 }}>
                                <Typography variant="h6" gutterBottom>
                                    Pedagogical Model
                                </Typography>
                                <Grid container direction="row">
                                    <Grid style={{ width: "50%" }}>
                                        <img src={curriculum} className={classes.img} />
                                        <Typography>Knowledge tracing and curriculum sequencing</Typography>
                                    </Grid>
                                    <Grid style={{ width: "50%" }}>
                                        <img src={syllabus} className={classes.img} />
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
                                    <img src={quick} className={classes.img} />
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
                                    <img src={teacher} className={classes.img} />
                                    <Typography>Teacher Reports</Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Card>
            </div>
        )
    }
}

DefineEducationLevel.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(DefineEducationLevel);