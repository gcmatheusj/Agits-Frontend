import React, { Component } from "react";
import { Grid, Card, Typography, ButtonBase, Divider } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import participation from "../../../assets/participation.png";
import performance from "../../../assets/performance.png";
import competition from "../../../assets/competition.png";
import enjoyment from "../../../assets/enjoyment.png";
import exploration from "../../../assets/exploration.png";
import effectiveness from "../../../assets/effectiveness.png";

import story from "../../../assets/story.png";
import rewards from "../../../assets/rewards.png";
import badge from "../../../assets/badge.png";
import levels from "../../../assets/levels.png";
import challenges from "../../../assets/challenges.png";
import leaderboard from "../../../assets/leaderboard.png";
import points from "../../../assets/points.png";
import feedback from "../../../assets/feedback.png";
import avatar from "../../../assets/avatar.png";
import quests from "../../../assets/quests.png";
import bossfight from "../../../assets/boss-fight.png";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.down("sm")]: {
      padding: 1,
      marginTop: 10,
      marginBottom: 20
    }
  },
  gridCard: {
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  },
  gridText: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem"
    }
  },
  titleCard: {
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      textAlign: "center"
    }
  },
  textCard: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
      marginBottom: 15
    }
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 20,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      marginBottom: 0
    },
    width: 128
  },
  icon: {
    height: 50, 
    width: 50,
    margin: 5
  }
});

class DefineGamificationModel extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    checkedA: true,
    checkedB: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <div style={{ justifyContent: "center" }}>
        <Typography className={classes.title} variant="subtitle1">
          What is the main behavior do you expect from your students when they
          are learning in the gamifed tutor?
        </Typography>
        <Typography className={classes.title} variant="subtitle1">
          Using gamificantion you can drive yours students to a motivating
          experience. We provide six target behavior options that are positively
          supported by the literature! Each behavior enables a particular set of
          gamification elemwnts in your customized tutor
        </Typography>
        <div className={classes.root}>
          <Card>
            <Grid container style={{ padding: 20 }}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  spacing={16}
                  className={classes.gridCard}
                >
                  <img
                    className={classes.img}
                    alt="complex"
                    src={participation}
                  />
                  <Grid
                    className={classes.gridText}
                    container
                    item
                    xs={12}
                    sm
                    container
                  >
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography
                          className={classes.titleCard}
                          gutterBottom
                          variant="h6"
                        >
                          Participation
                        </Typography>
                        <Typography
                          className={classes.textCard}
                          gutterBottom
                          variant="subtitle1"
                          
                        >
                          Select this option if you expect your students to be
                          participative in your course by interacting with the
                          tutor. Enabling this behavior will activate the following
                          game elements in the system: <strong>Challenges,</strong> <strong>Levels,</strong> <strong>Leaderboard,</strong> <strong>Story,</strong> <strong>Badges,</strong> <strong>Rewards,</strong> and <strong>Points.</strong>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container direction="row">
                  <img className={classes.icon} alt="x" src={story} />
                  <img
                  className={classes.icon}
                    alt="x"
                    src={rewards}
                  />
                  <img className={classes.icon} alt="x" src={badge} />
                  <img className={classes.icon} alt="x" src={levels} />
                  <img className={classes.icon} alt="x" src={challenges} />
                  <img className={classes.icon} alt="x" src={leaderboard} />
                  <img className={classes.icon} alt="x" src={points} />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </div>
        <div className={classes.root}>
          <Card>
            <Grid container style={{ padding: 20 }}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  spacing={16}
                  className={classes.gridCard}
                >
                  <img
                    className={classes.img}
                    alt="complex"
                    src={performance}
                  />
                  <Grid
                    className={classes.gridText}
                    container
                    item
                    xs={12}
                    sm
                    container
                  >
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography
                          className={classes.titleCard}
                          gutterBottom
                          variant="h6"
                        >
                          Performance
                        </Typography>
                        <Typography
                          className={classes.textCard}
                          gutterBottom
                          variant="subtitle1"
                          
                        >
                          Select this option if you expect your students to mainly
                          focus on their learning performance by using the tutor.
                          Enabling this behavior will activate the following game
                          elements in the system: <strong>Story,</strong> <strong>Feedback,</strong> <strong>Rewards,</strong> <strong>Badges,</strong>
                          <strong>Challenges,</strong> <strong>Leaderboard,</strong> <strong>Points,</strong> and <strong>Levels.</strong>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container direction="row">
                  <img className={classes.icon} alt="x" src={story} />
                  <img
                  className={classes.icon}
                    alt="x"
                    src={feedback}
                  />
                  <img
                  className={classes.icon}
                    alt="x"
                    src={rewards}
                  />
                  <img className={classes.icon} alt="x" src={badge} />
                  <img className={classes.icon} alt="x" src={levels} />
                  <img
                  className={classes.icon}
                    alt="x"
                    src={challenges}
                  />
                  <img className={classes.icon} alt="x" src={leaderboard} />
                  <img className={classes.icon} alt="x" src={points} />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </div>
        <div className={classes.root}>
          <Card>
            <Grid container style={{ padding: 20 }}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  spacing={16}
                  className={classes.gridCard}
                >
                  <img
                    className={classes.img}
                    alt="complex"
                    src={competition}
                  />
                  <Grid
                    className={classes.gridText}
                    container
                    item
                    xs={12}
                    sm
                    container
                  >
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography
                          className={classes.titleCard}
                          gutterBottom
                          variant="h6"
                        >
                          Competition
                        </Typography>
                        <Typography
                          className={classes.textCard}
                          gutterBottom
                          variant="subtitle1"
                          
                        >
                          Select this option if you expect to provide competition
                          between students in the tutor. Enabling this behavior will
                          activate the following game elements in the system:
                          <strong>Leaderboard</strong> and <strong>Points.</strong>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container direction="row">
                  <img className={classes.icon} alt="x" src={leaderboard} />
                  <img className={classes.icon} alt="x" src={points} />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </div>
        <div className={classes.root}>
          <Card>
            <Grid container style={{ padding: 20 }}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  spacing={16}
                  className={classes.gridCard}
                >
                  <img
                    className={classes.img}
                    alt="complex"
                    src={enjoyment}
                  />
                  <Grid
                    className={classes.gridText}
                    container
                    item
                    xs={12}
                    sm
                    container
                  >
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography
                          className={classes.titleCard}
                          gutterBottom
                          variant="h6"
                        >
                          Enjoyment
                        </Typography>
                        <Typography
                          className={classes.textCard}
                          gutterBottom
                          variant="subtitle1"
                          
                        >
                          Select this option if you expect your students to be mainly
                      enjoyed by the tutor while they are learning. Enabling this
                      behavior will activate the following game elements in the
                      system: <strong>Story,</strong> <strong>Rewards,</strong> <strong>Badges,</strong> <strong>Points,</strong> <strong>Avatar,</strong> and <strong>Quest.</strong>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container direction="row">
                <img className={classes.icon} alt="x" src={story} />
                <img
                className={classes.icon}
                  alt="x"
                  src={rewards}
                />
                <img className={classes.icon} alt="x" src={badge} />
                  <img
                  className={classes.icon}
                    alt="x"
                    src={points}
                  />
                  <img
                  className={classes.icon}
                    alt="x"
                    src={avatar}
                  />
                  <img
                  className={classes.icon}
                    alt="x"
                    src={quests}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </div>
        <div className={classes.root}>
          <Card>
            <Grid container style={{ padding: 20 }}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  spacing={16}
                  className={classes.gridCard}
                >
                  <img
                    className={classes.img}
                    alt="complex"
                    src={exploration}
                  />
                  <Grid
                    className={classes.gridText}
                    container
                    item
                    xs={12}
                    sm
                    container
                  >
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography
                          className={classes.titleCard}
                          gutterBottom
                          variant="h6"
                        >
                          Exploration
                        </Typography>
                        <Typography
                          className={classes.textCard}
                          gutterBottom
                          variant="subtitle1"
                          
                        >
                          Select this option if you expect to incentive the
                          exploration of the tutor by your students.Enabling this
                          behavior will activate the following game elements in the
                          system: <strong>Levels,</strong> <strong>Challenges,</strong> <strong>Boss Fight.</strong>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container direction="row">
                  <img className={classes.icon} alt="x" src={levels} />
                  <img className={classes.icon} alt="x" src={challenges} />
                  <img className={classes.icon} alt="x" src={bossfight} />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </div>
        <div className={classes.root}>
          <Card>
            <Grid container style={{ padding: 20 }}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  spacing={16}
                  className={classes.gridCard}
                >
                  <img
                    className={classes.img}
                    alt="complex"
                    src={effectiveness}
                  />
                  <Grid
                    className={classes.gridText}
                    container
                    item
                    xs={12}
                    sm
                    container
                  >
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography
                          className={classes.titleCard}
                          gutterBottom
                          variant="h6"
                        >
                        Effectiveness
                        </Typography>
                        <Typography
                          className={classes.textCard}
                          gutterBottom
                          variant="subtitle1"
                          
                        >
                        Select this options if you mainly expect your students to be
                        effective when they are using the tutor. Enabling this
                        behavior will activate the following game elements in the
                        system: <strong>Leaderboard,</strong> <strong>Badges,</strong> <strong>Points.</strong>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container direction="row">
                  <img className={classes.icon} alt="x" src={leaderboard} />
                  <img className={classes.icon} alt="x" src={badge} />
                  <img className={classes.icon} alt="x" src={points} />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
    );
  }
}

DefineGamificationModel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DefineGamificationModel);
