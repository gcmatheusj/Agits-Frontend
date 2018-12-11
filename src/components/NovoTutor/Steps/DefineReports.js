import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid, Card, Typography, Switch,
} from '@material-ui/core';
import ActionCreators from '../../../redux/actions/tutor';

import student from '../../../assets/student.png';
import teacher from '../../../assets/teacher.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: '100%',
    padding: 1,
    paddingTop: 10,
    paddingBottom: 10,
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

const DefineReports = (props) => {
    const { classes, switchStudentsReports, switchTeacherReports, studentsReports, teacherReports } = props;
    return (
      <div style={{ justifyContent: 'center' }}>
        {/* <Typography className={classes.title} variant="subtitle1">
          This is the least step to customize your tutor!
    </Typography> */}
        <Typography className={classes.title} variant="subtitle1">
          You can also select which kind of reports the tutor will provide
        </Typography>
        <div className={classes.root}>
          <Card>
            <Grid container style={{ padding: 20 }}>
              <Grid item xs={12}>
                <Grid container direction="row" spacing={16} className={classes.gridCard}>
                  <img className={classes.img} alt="complex" src={student} />
                  <Grid className={classes.gridText} container item xs={12} sm>
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography className={classes.titleCard} gutterBottom variant="h6">
                          Students Reports
                        </Typography>
                        <Typography className={classes.textCard} gutterBottom variant="subtitle1">
                          Enable this feature if you want to provide for your students different
                          types of reports regarding her learning performance. It includes reports
                          on learning performance in the overall domainor on particular subjects as
                          well as tests history.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Switch
                    checked={studentsReports}
                    onChange={switchStudentsReports}
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
                  <img className={classes.img} alt="complex" src={teacher} />
                  <Grid className={classes.gridText} container item xs={12} sm>
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography className={classes.titleCard} gutterBottom variant="h6">
                          Teacher Reports
                        </Typography>
                        <Typography className={classes.textCard} gutterBottom variant="subtitle1">
                          Enable this feature if you want to visualize reports about the
                          interaction, learning performance and other interesting reports about your
                          students.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Switch
                    checked={teacherReports}
                    onChange={switchTeacherReports}
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


DefineReports.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  tutor: state.tutor,
});

const mapDispatchToProps = dispatch => ({
  switchStudentsReports: () => dispatch(ActionCreators.studentsreports()),
  switchTeacherReports: () => dispatch(ActionCreators.teacherreports()),
});
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DefineReports));