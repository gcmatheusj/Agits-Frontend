import React, { Component } from 'react';
import {
  Grid, Card, Typography, Divider, ButtonBase, Button,
} from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import participation from '../../../assets/participation.png';
import performance from '../../../assets/performance.png';
import competition from '../../../assets/competition.png';
import enjoyment from '../../../assets/enjoyment.png';
import exploration from '../../../assets/exploration.png';
import effectiveness from '../../../assets/effectiveness.png';

import story from '../../../assets/story.png';
import rewards from '../../../assets/rewards.png';
import badge from '../../../assets/badge.png';
import levels from '../../../assets/levels.png';
import challenges from '../../../assets/challenges.png';
import leaderboard from '../../../assets/leaderboard.png';
import points from '../../../assets/points.png';
import feedback from '../../../assets/feedback.png';
import avatar from '../../../assets/avatar.png';
import quests from '../../../assets/quests.png';
import bossfight from '../../../assets/boss-fight.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: 1,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      padding: 1,
      marginTop: 10,
      marginBottom: 20,
    },
  },
  gridCard: {
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  gridText: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  title: {
    padding: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
  titleCard: {
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
      textAlign: 'center',
    },
  },
  textCard: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      marginBottom: 15,
    },
  },
  cardButton: {
    display: 'block',
    textAlign: 'initial',
  },
  gridContent: {
    padding: 20,
    paddingBottom: 0,
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      width: 10,
      height: 10,
    },
  },
  firstIcon: {
    width: 50,
    height: 50,
    margin: 5,
    marginLeft: 21,
  },
  container: {
    display: 'flex',
  },
  img: {
    margin: 20,
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      marginBottom: 0,
    },
    width: 128,
  },
  gridGame: {
    marginLeft: 20,
    marginRight: 20
  },
  paper: {
    margin: theme.spacing.unit,
    width: 50,
    height: 50,
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
  collapse: {
    width: '100%',
  },
  icon: {
    height: 50,
    width: 50,
    margin: 5,
  },
});

class DefineGamificationModel extends Component {
  state = {
    checked: '',
  };

  handleChangeIcon = name => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  handleChangeA = () => {
    this.setState({ checked: 'checkedA' });
  };

  handleChangeB = () => {
    this.setState({ checked: 'checkedB' });
  };

  handleChangeC = () => {
    this.setState({ checked: 'checkedC' });
  };

  handleChangeD = () => {
    this.setState({ checked: 'checkedD' });
  };

  handleChangeE = () => {
    this.setState({ checked: 'checkedE' });
  };

  handleChangeF = () => {
    this.setState({ checked: 'checkedF' });
  };

  handleChangeG = () => {
    this.setState({ checked: 'checkedG' });
  };

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;
    return (
      <div style={{ justifyContent: 'center' }}>
        <Typography className={classes.title} variant="subtitle1">
          What is the main behavior do you expect from your students when they are learning in the
          gamifed tutor?
        </Typography>
        <div className={classes.root}>
          <Card>
            <ButtonBase className={classes.cardButton}>
              <Grid className={classes.gridContent} container>
                <Grid item xs={12}>
                  <Grid container direction="row" spacing={16} className={classes.gridCard}>
                    <img className={classes.img} alt="complex" src={participation} />
                    <Grid className={classes.gridText} container item xs={12} sm>
                      <Grid item xs container direction="column" spacing={16}>
                        <Grid item xs>
                          <Typography className={classes.titleCard} gutterBottom variant="h6">
                            Participation
                          </Typography>
                          <Typography className={classes.textCard} gutterBottom variant="subtitle1">
                            Select this option if you expect your students to be participative in
                            your course. This will activate the following game elements in the
                            system:
                            {' '}
                            <strong>Challenges,</strong>
                            {' '}
                            <strong>Levels,</strong>
                            {' '}
                            <strong>Leaderboard,</strong>
                            {' '}
                            <strong>Story,</strong>
                            {' '}
                            <strong>Badges,</strong>
                            {' '}
                            <strong>Rewards,</strong>
                            {' '}
                            and
                            {' '}
                            <strong>Points.</strong>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider />
                </Grid>
              </Grid>
            </ButtonBase>
            <div className={classes.gridGame}>
              <Button onClick={this.handleChangeA}>
                <img className={classes.icon} alt="x" src={story} />
              </Button>
              <Button onClick={this.handleChangeB}>
                <img className={classes.icon} alt="x" src={rewards} />
              </Button>
              <Button onClick={this.handleChangeC}>
                <img className={classes.icon} alt="x" src={badge} />
              </Button>
              <Button onClick={this.handleChangeD}>
                <img className={classes.icon} alt="x" src={levels} />
              </Button>
              <Button onClick={this.handleChangeE}>
                <img className={classes.icon} alt="x" src={challenges} />
              </Button>
              <Button onClick={this.handleChangeF}>
                <img className={classes.icon} alt="x" src={leaderboard} />
              </Button>
              <Button onClick={this.handleChangeG}>
                <img className={classes.icon} alt="x" src={points} />
              </Button>
              <div className={classes.container}>
                <Collapse className={classes.collapse} in={checked === 'checkedA'}>
                  <Divider />
                  <Grid container direction="row" alignItems="center">
                    <img className={classes.paper} src={story} alt="" />
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      {' '}
                    </Typography>
                  </Grid>
                </Collapse>
              </div>
              <div className={classes.container}>
                <Collapse className={classes.collapse} in={checked === 'checkedB'}>
                  <Divider />
                  <Grid container direction="row" alignItems="center">
                    <img className={classes.paper} src={rewards} alt="" />
                    <Typography>
                      Lorem Ipsum B is simply dummy text of the printing and typesetting industry.
                      {' '}
                    </Typography>
                  </Grid>
                </Collapse>
              </div>
              <div className={classes.container}>
                <Collapse className={classes.collapse} in={checked === 'checkedC'}>
                  <Divider />
                  <Grid container direction="row" alignItems="center">
                    <img className={classes.paper} src={badge} alt="" />
                    <Typography>
                      Lorem Ipsum C is simply dummy text of the printing and typesetting industry.
                      {' '}
                    </Typography>
                  </Grid>
                </Collapse>
              </div>
              <div className={classes.container}>
                <Collapse className={classes.collapse} in={checked === 'checkedD'}>
                  <Divider />
                  <Grid container direction="row" alignItems="center">
                    <img className={classes.paper} src={levels} alt="" />
                    <Typography>
                      Lorem Ipsum D is simply dummy text of the printing and typesetting industry.
                      {' '}
                    </Typography>
                  </Grid>
                </Collapse>
              </div>
              <div className={classes.container}>
                <Collapse className={classes.collapse} in={checked === 'checkedE'}>
                  <Divider />
                  <Grid container direction="row" alignItems="center">
                    <img className={classes.paper} src={challenges} alt="" />
                    <Typography>
                      Lorem Ipsum E is simply dummy text of the printing and typesetting industry.
                      {' '}
                    </Typography>
                  </Grid>
                </Collapse>
              </div>
              <div className={classes.container}>
                <Collapse className={classes.collapse} in={checked === 'checkedF'}>
                  <Divider />
                  <Grid container direction="row" alignItems="center">
                    <img className={classes.paper} src={leaderboard} alt="" />
                    <Typography>
                      Lorem Ipsum F is simply dummy text of the printing and typesetting industry.
                      {' '}
                    </Typography>
                  </Grid>
                </Collapse>
              </div>
              <div className={classes.container}>
                <Collapse className={classes.collapse} in={checked === 'checkedG'}>
                  <Divider />
                  <Grid container direction="row" alignItems="center">
                    <img className={classes.paper} src={points} alt="" />
                    <Typography>
                      Lorem Ipsum G is simply dummy text of the printing and typesetting industry.
                      {' '}
                    </Typography>
                  </Grid>
                </Collapse>
              </div>
            </div>
          </Card>
        </div>
        <div className={classes.root}>
          <Card>
            <Grid container style={{ padding: 20 }}>
              <Grid item xs={12}>
                <Grid container direction="row" spacing={16} className={classes.gridCard}>
                  <img className={classes.img} alt="complex" src={performance} />
                  <Grid className={classes.gridText} container item xs={12} sm>
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography className={classes.titleCard} gutterBottom variant="h6">
                          Performance
                        </Typography>
                        <Typography className={classes.textCard} gutterBottom variant="subtitle1">
                          Select this option if you expect your students to mainly focus on their
                          learning performance. This will activate the following game elements in
                          the system:
                          {' '}
                          <strong>Story,</strong>
                          {' '}
                          <strong>Feedback,</strong>
                          {' '}
                          <strong>Rewards,</strong>
                          {' '}
                          <strong>Badges,</strong>
                          <strong>Challenges,</strong>
                          {' '}
                          <strong>Leaderboard,</strong>
                          {' '}
                          <strong>Points,</strong>
                          {' '}
and
                          <strong>Levels.</strong>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container direction="row">
                  <img className={classes.icon} alt="x" src={story} />
                  <img className={classes.icon} alt="x" src={feedback} />
                  <img className={classes.icon} alt="x" src={rewards} />
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
                <Grid container direction="row" spacing={16} className={classes.gridCard}>
                  <img className={classes.img} alt="complex" src={competition} />
                  <Grid className={classes.gridText} container item xs={12} sm>
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography className={classes.titleCard} gutterBottom variant="h6">
                          Competition
                        </Typography>
                        <Typography className={classes.textCard} gutterBottom variant="subtitle1">
                          Select this option if you expect to provide competition between students.
                          This will activate the following game elements in the system:
                          <strong>Leaderboard</strong>
                          {' '}
                          and
                          <strong>Points.</strong>
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
                <Grid container direction="row" spacing={16} className={classes.gridCard}>
                  <img className={classes.img} alt="complex" src={enjoyment} />
                  <Grid className={classes.gridText} container item xs={12} sm>
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography className={classes.titleCard} gutterBottom variant="h6">
                          Enjoyment
                        </Typography>
                        <Typography className={classes.textCard} gutterBottom variant="subtitle1">
                          Select this option if you expect your students to be mainly enjoyed by the
                          tutor while they are learning. This will activate the following game
                          elements in the system:
                          {' '}
                          <strong>Story,</strong>
                          {' '}
                          <strong>Rewards,</strong>
                          {' '}
                          <strong>Badges,</strong>
                          {' '}
                          <strong>Points,</strong>
                          {' '}
                          <strong>Avatar,</strong>
                          {' '}
                          and
                          {' '}
                          <strong>Quest.</strong>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container direction="row">
                  <img className={classes.icon} alt="x" src={story} />
                  <img className={classes.icon} alt="x" src={rewards} />
                  <img className={classes.icon} alt="x" src={badge} />
                  <img className={classes.icon} alt="x" src={points} />
                  <img className={classes.icon} alt="x" src={avatar} />
                  <img className={classes.icon} alt="x" src={quests} />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </div>
        <div className={classes.root}>
          <Card>
            <Grid container style={{ padding: 20 }}>
              <Grid item xs={12}>
                <Grid container direction="row" spacing={16} className={classes.gridCard}>
                  <img className={classes.img} alt="complex" src={exploration} />
                  <Grid className={classes.gridText} container item xs={12} sm>
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography className={classes.titleCard} gutterBottom variant="h6">
                          Exploration
                        </Typography>
                        <Typography className={classes.textCard} gutterBottom variant="subtitle1">
                          Select this option if you expect to incentive the exploration of the tutor
                          by your students.This will activate the following game elements in the
                          system:
                          {' '}
                          <strong>Levels,</strong>
                          {' '}
                          <strong>Challenges,</strong>
                          {' '}
                          <strong>Boss Fight.</strong>
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
                <Grid container direction="row" spacing={16} className={classes.gridCard}>
                  <img className={classes.img} alt="complex" src={effectiveness} />
                  <Grid className={classes.gridText} container item xs={12} sm>
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography className={classes.titleCard} gutterBottom variant="h6">
                          Effectiveness
                        </Typography>
                        <Typography className={classes.textCard} gutterBottom variant="subtitle1">
                          Select this options if you mainly expect your students to be effective
                          when they are using the tutor. Enabling this behavior will activate the
                          following game elements in the system:
                          {' '}
                          <strong>Leaderboard,</strong>
                          {' '}
                          <strong>Badges,</strong>
                          {' '}
                          <strong>Points.</strong>
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
  classes: PropTypes.object,
};

/**
 *Quando conectado com o Redux utilizar a seguinte abordagem:
 *export default withStyles(styles)(connect(props...)(DefineGamificationModel))
*/
export default withStyles(styles)(DefineGamificationModel);
