import React, { Component } from "react";
import { Grid, Card, Typography, Divider } from "@material-ui/core";
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
    [theme.breakpoints.down('sm')]: {
      padding: 1,
    },
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      width: 10,
      height: 10,
    },
  },
  img: {
    margin: 20,
    width: 128,
    [theme.breakpoints.down('sm')]: {
      width: 60
    },
  },
  textCard: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem'
    },
  },
  titleCard: {
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
      textAlign: 'center'
    },
  },
  gridCard: {
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
  },
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
        <Typography variant="h6">
          What is the main behavior do you expect from your students when they
          are learning in the gamifed tutor?
        </Typography>
        <Typography variant="subtitle1">
          Using gamificantion you can drive yours students to a motivating
          experience. We provide six target behavior options that are positively
          supported by the literature! Each behavior enables a particular set of
          gamification elemwnts in your customized tutor
        </Typography>
        <div className={classes.root}>
          <Card>
            <Grid container spacing={16} style={{ alignItems: "center" }} className={classes.gridCard}>
              <img
                className={classes.img}
                alt="complex"
                src={participation}
              />
              <Grid container item xs={12} sm container>
                <Grid item xs container direction="column" spacing={16}>
                  <Grid item xs>
                    <Typography className={classes.titleCard} gutterBottom variant="h6">
                      Participation
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      align="justify"
                      className={classes.textCard}
                    >
                      Select this option if you expect your students to be
                      participative in your course by interacting with the
                      tutor. Enabling this behavior will activate the following
                      game elements in the system: Challenges, Levels,
                      Leaderboard, Story, Badges, Rewards and Points.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid item xs container direction="row">
              <div>
                <img style={{height: 50, width: 50}} alt="x" src={story} className={classes.image}/>
              </div>
              <div>
                <img style={styles.image} alt="x" src={rewards} />
              </div>
              <div>
                <img style={styles.image} alt="x" src={badge} />
              </div>
              <div>
                <img style={styles.image} alt="x" src={levels} />
              </div>
              <div>
                <img style={styles.image} alt="x" src={challenges}/>
              </div>
              <div>
                <img style={styles.image} alt="x" src={leaderboard}/>
              </div>
              <div>
                <img style={styles.image} alt="x" src={points} />
              </div>
            </Grid>
          </Card>
        </div>
        <div className={classes.root}>

        <Card>
          <Grid container spacing={16} style={{ alignItems: "center" }} className={classes.gridCard}>
            <img className={classes.img} alt="complex" src={performance} />
            <Grid container item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography className={classes.titleCard} gutterBottom variant="h6">
                    Performance
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" align="justify" className={classes.textCard}>
                    Select this option if you expect your students to mainly
                    focus on their learning performance by using the tutor.
                    Enabling this behavior will activate the following game
                    elements in the system: Story, Feedback, Rewards, Badges,
                    Challenges, Leaderboard, Points and Levels.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid item xs container direction="row">
            <div>
              <img style={styles.image} alt="x" src={story} />
            </div>
            <div>
              <img style={styles.image} alt="x" src={feedback} />
            </div>
            <div>
              <img style={styles.image} alt="x" src={rewards} />
            </div>
            <div>
              <img style={styles.image} alt="x" src={badge} />
            </div>
            <div>
              <img style={styles.image} alt="x" src={levels} />
            </div>
            <div>
              <img style={styles.image} alt="x" src={challenges} />
            </div>
            <div>
              <img style={styles.image} alt="x" src={leaderboard}/>
            </div>
            <div>
              <img style={styles.image} alt="x" src={points} />
            </div>
          </Grid>
          <Divider />
          <Grid container direction="row" alignItems="center">
            <div style={{ maxWidth: 40, maxHeight: 40 }}>
              <img 
                style={{ height: "100%", width: "100%" }}
                alt="x"
                src={leaderboard}
              />
            </div>
            <Typography
              variant="body1"
              style={{ marginTop: 2 }}
              align="justify"
            >
              Leaderboard: A ranked list of participants, showing the
              performance of a particular student in
            </Typography>
            <Typography variant="body1" align="justify">
              comparison to the highest scores and to his friends
            </Typography>
          </Grid>
        </Card>
        </div>
        <div className={classes.root}>

        <Card>
          <Grid container spacing={16} style={{ alignItems: "center" }} className={classes.gridCard}>
            <img className={classes.img} alt="complex" src={competition} />
            <Grid container item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography className={classes.titleCard} gutterBottom variant="h6">
                    Competition
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" align="justify" className={classes.textCard}>
                    Select this option if you expect to provide competition
                    between students in the tutor. Enabling this behavior will
                    activate the following game elements in the system:
                    Leaderboard and Points
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid container direction="row">
            <div>
              <img style={styles.image} alt="x" src={leaderboard} />
            </div>
            <div>
              <img style={styles.image} alt="x" src={points} />
            </div>
          </Grid>
        </Card>
        </div>
        <div className={classes.root}>

        <Card>
          <Grid container spacing={16} style={{ alignItems: "center" }} className={classes.gridCard}>
            <img className={classes.img} alt="complex" src={enjoyment} />
            <Grid container item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography className={classes.titleCard} gutterBottom variant="h6">
                    Enjoyment
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" align="justify" className={classes.textCard}>
                    Select this option if you expect your students to be mainly
                    enjoyed by the tutor while they are learning. Enabling this
                    behavior will activate the following game elements in the
                    system: Story, Rewards, Badges, Points, Avatar and Quests
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid item xs container direction="row">
            <div>
              <img style={styles.image} alt="x" src={story} />
            </div>
            <div>
              <img style={styles.image} alt="x" src={rewards} />
            </div>
            <div>
              <img style={styles.image} alt="x" src={badge} />
            </div>
            <div>
              <img style={styles.image} alt="x" src={points} />
            </div>
            <div>
              <img style={styles.image} alt="x" src={avatar} />
            </div>
            <div>
              <img style={styles.image} alt="x" src={quests} />
            </div>
          </Grid>
        </Card>
        </div>

        <div className={classes.root}>

        <Card>
          <Grid container spacing={16} style={{ alignItems: "center" }} className={classes.gridCard}>
            <img className={classes.img} alt="complex" src={exploration} />
            <Grid container item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography className={classes.titleCard} gutterBottom variant="h6">
                    Exploration
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" align="justify" className={classes.textCard}>
                    Select this option if you expect to incentive the
                    exploration of the tutor by your students.Enabling this
                    behavior will activate the following game elements in the
                    system: Levels, Challenges, Feedback, Boos Fight,
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid item xs container direction="row">
            <div>
              <img style={styles.image} alt="x" src={levels} />
            </div>
            <div>
              <img style={styles.image} alt="x" src={challenges} />
            </div>
            <div>
              <img style={styles.image} alt="x" src={bossfight} />
            </div>
          </Grid>
        </Card>
        </div>
        <div className={classes.root}>

        <Card>
          <Grid container spacing={16} style={{ alignItems: "center" }} className={classes.gridCard}>
            <img className={classes.img} alt="complex" src={effectiveness} />
            <Grid container item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography className={classes.titleCard} gutterBottom variant="h6">
                    Effectiveness
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" align="justify" className={classes.textCard}>
                    Select this options if you mainly expect your students to be
                    effective when they are using the tutor. Enabling this
                    behavior will activate the following game elements in the
                    system: Leaderboard, Badges and Points
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid item xs container direction="row">
            <div>
              <img style={styles.image} alt="x" src={leaderboard} />
            </div>
            <div>
              <img style={styles.image} alt="x" src={badge} />
            </div>
            <div>
              <img style={styles.image} alt="x" src={points} />
            </div>
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
