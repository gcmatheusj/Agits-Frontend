import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid, Typography, Card, Switch,
} from '@material-ui/core';
import ActionCreators from '../../../redux/actions/tutor';

import curriculum from '../../../assets/curriculum.png';
import syllabusimg from '../../../assets/syllabus.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: '100%',
    padding: 1,
    paddingBottom: 10,
    paddingTop: 10,
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
    },
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 20,
  },
});

const DefinePedagogicalModel = (props) => {
  const {
    classes, switchKnowledgetcs, knowledgetcs, 
    syllabus, switchSyllabus 
  } = props;

    return (
      <div style={{ justifyContent: 'center' }}>
        <Typography className={classes.title} variant="subtitle1">
          We use the most advanced techniques for providing an adaptive and intelligent tutor for
          your students!
        </Typography>
        <div className={classes.root}>
          <Card>
            <Grid container style={{ padding: 20 }}>
              <Grid item xs={12}>
                <Grid container direction="row" spacing={16} className={classes.gridCard}>
                  <img className={classes.img} alt="complex" src={curriculum} />
                  <Grid className={classes.gridText} container item xs={12} sm>
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography className={classes.titleCard} gutterBottom variant="h6">
                          Knowledge tracing and curriculum sequence
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" className={classes.textCard}>
                          By default your customized tutor maskes use of current intelligent
                          techniques that model student&apos;s knowledge to accurately decide which
                          problems it should give to students at any given time.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Switch
                    checked={knowledgetcs}
                    onChange={switchKnowledgetcs}
                    value="checkedA"
                    color="primary"
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
                <Grid container direction="row" spacing={16} className={classes.gridCard}>
                  <img className={classes.img} alt="complex" src={syllabusimg} />
                  <Grid className={classes.gridText} container item xs={12} sm>
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography className={classes.titleCard} gutterBottom variant="h6">
                          Syllabus
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" className={classes.textCard}>
                          Enable this feature if you want to manage the schedule and subjects on
                          which your students will learn using the tutor
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Switch
                    checked={syllabus}
                    onChange={switchSyllabus}
                    value="checkedB"
                    color="primary"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
    );
  }

DefinePedagogicalModel.propTypes = {
  classes: PropTypes.object,
  switchKnowledgetcs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tutor: state.tutor,
});

const mapDispatchToProps = dispatch => ({
  switchKnowledgetcs: () => dispatch(ActionCreators.knowledgetcs()),
  switchSyllabus: () => dispatch(ActionCreators.syllabus()),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(DefinePedagogicalModel),
);
