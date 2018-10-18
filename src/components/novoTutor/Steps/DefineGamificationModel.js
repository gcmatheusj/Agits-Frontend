import React, { Component } from "react"
import { Grid, Paper, Typography, ButtonBase, Divider, CardActionArea } from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import participation from "../../../assets/participation.png"
import performance from "../../../assets/performance.png"
import competition from "../../../assets/competition.png"
import enjoyment from "../../../assets/enjoyment.png"
import exploration from "../../../assets/exploration.png"
import effectiveness from "../../../assets/effectiveness.png"

import story from "../../../assets/story.png"
import rewards from "../../../assets/rewards.png"
import badge from "../../../assets/badge.png"
import levels from "../../../assets/levels.png"
import challenges from "../../../assets/challenges.png"
import leaderboard from "../../../assets/leaderboard.png"
import points from "../../../assets/points.png"
import feedback from "../../../assets/feedback.png"
import avatar from "../../../assets/avatar.png"
import quests from "../../../assets/quests.png"
import bossfight from "../../../assets/boss-fight.png"

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: '100%',
        padding: theme.spacing.unit * 2,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    icon: {
        maxWidth: 30,
        maxHeight: 30,
        margin: 5
    }
});

class DefineGamificationModel extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        checkedA: true,
        checkedB: false,
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;
        return (
            <div style={{ justifyContent: "center" }}>
                <Typography variant="title">
                    What is the main behavior do you expect from your students when they are learning in the gamifed tutor?
                </Typography>
                <Typography variant="subheading">
                    Using gamificantion you can drive yours students to a motivating experience. We provide six target
                    behavior options that are positively supported by the literature! Each behavior enables a particular
                    set of gamification elemwnts in your customized tutor
                </Typography>
                <CardActionArea>
                    <Paper className={classes.root}>
                        <Grid container spacing={16} style={{ alignItems: "center" }}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src={participation} />
                                </ButtonBase>
                            </Grid>
                            <Grid container item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={16}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="title">
                                            Participation
                                        </Typography>
                                        <Typography gutterBottom variant="subheading" align="justify">
                                            Select this option if you expect your students to be participative in your
                                            course by interacting with the tutor. Enabling this behavior will activate the
                                            following game elements in the system: Challenges, Levels, Leaderboard, Story,
                                            Badges, Rewards and Points
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={story} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={rewards} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={badge} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={levels} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={challenges} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={leaderboard} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={points} />
                            </ButtonBase>
                        </Grid>
                    </Paper>
                </CardActionArea>
                <div style={{ marginTop: 10 }} />
                <CardActionArea>
                    <Paper className={classes.root}>
                        <Grid container spacing={16} style={{ alignItems: "center" }}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src={performance} />
                                </ButtonBase>
                            </Grid>
                            <Grid container item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={16}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="title">
                                            Performance
                                        </Typography>
                                        <Typography gutterBottom variant="subheading" align="justify">
                                            Select this option if you expect your students to mainly focus on their
                                            learning performance by using the tutor. Enabling this behavior will activate the
                                            following game elements in the system: Story, Feedback, Rewards,
                                            Badges, Challenges, Leaderboard, Points and Levels
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid item xs container direction="row">
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={story} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={feedback} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={rewards} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={badge} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={levels} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={challenges} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={leaderboard} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={points} />
                            </ButtonBase>
                        </Grid>
                        <Divider />
                        <Grid container direction="row" alignItems="center">
                            <ButtonBase style={{ maxWidth: 40, maxHeight: 40, }}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={leaderboard} />
                            </ButtonBase>
                            <Typography style={{ marginTop: 2 }} align="justify">
                                Leaderboard: A ranked list of participants, showing the performance of a particular student in
                            <Typography align="justify">
                                    comparison to the highest scores and to his friends
                            </Typography>
                            </Typography>
                        </Grid>
                    </Paper>
                </CardActionArea>
                <div style={{ marginTop: 10 }} />
                <CardActionArea>
                    <Paper className={classes.root}>
                        <Grid container spacing={16} style={{ alignItems: "center" }}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src={competition} />
                                </ButtonBase>
                            </Grid>
                            <Grid container item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={16}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="title">
                                            Competition
                                        </Typography>
                                        <Typography gutterBottom variant="subheading" align="justify">
                                            Select this option if you expect to provide competition between students in the
                                            tutor. Enabling this behavior will activate the following game elements in the
                                            system: Leaderboard and Points
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={leaderboard} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={points} />
                            </ButtonBase>
                        </Grid>
                    </Paper>
                </CardActionArea>
                <div style={{ marginTop: 10 }} />

                <CardActionArea>
                    <Paper className={classes.root}>
                        <Grid container spacing={16} style={{ alignItems: "center" }}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src={enjoyment} />
                                </ButtonBase>
                            </Grid>
                            <Grid container item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={16}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="title">
                                            Enjoyment
                                        </Typography>
                                        <Typography gutterBottom variant="subheading" align="justify">
                                            Select this option if you expect your students to be mainly enjoyed by the
                                            tutor while they are learning. Enabling this behavior will activate the
                                            following game elements in the system: Story, Rewards, Badges, Points, Avatar
                                            and Quests
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={story} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={rewards} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={badge} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={points} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={avatar} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={quests} />
                            </ButtonBase>
                        </Grid>
                    </Paper>
                </CardActionArea>
                <div style={{ marginTop: 10 }} />

                <CardActionArea>
                    <Paper className={classes.root}>
                        <Grid container spacing={16} style={{ alignItems: "center" }}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src={exploration} />
                                </ButtonBase>
                            </Grid>
                            <Grid container item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={16}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="title">
                                            Exploration
                                        </Typography>
                                        <Typography gutterBottom variant="subheading" align="justify">
                                            Select this option if you expect to incentive the exploration of the tutor by
                                            your students.Enabling this behavior will activate the
                                            following game elements in the system: Levels, Challenges, Feedback, Boos Fight,
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={levels} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={challenges} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={bossfight} />
                            </ButtonBase>
                        </Grid>
                    </Paper>
                </CardActionArea>
                <div style={{ marginTop: 10 }} />

                <CardActionArea>
                    <Paper className={classes.root}>
                        <Grid container spacing={16} style={{ alignItems: "center" }}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src={effectiveness} />
                                </ButtonBase>
                            </Grid>
                            <Grid container item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={16}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="title">
                                            Effectiveness
                                        </Typography>
                                        <Typography gutterBottom variant="subheading" align="justify">
                                            Select this options if you mainly expect your students to be effective when they
                                            are using the tutor. Enabling this behavior will activate the
                                            following game elements in the system: Leaderboard, Badges and Points
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={leaderboard} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={badge} />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img style={{ height: "100%", width: "100%" }} alt="x" src={points} />
                            </ButtonBase>
                        </Grid>
                    </Paper>
                </CardActionArea>
            </div>
        )
    }
}

DefineGamificationModel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefineGamificationModel)