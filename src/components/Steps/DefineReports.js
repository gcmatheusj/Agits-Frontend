import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ActionCreators from '../../redux/actions/tutor';

import student from '../../assets/student.png';
import teacher from '../../assets/teacher.png';

import StepsCard from './StepsCard'

const styles = theme => ({
  title: {
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
});

const DefineReports = (props) => {
  const {
    classes, switchStudentsReports, switchTeacherReports,
    studentsReports, teacherReports
  } = props;

  const values = [
    {
      img: student,
      title: 'Students Reports',
      description: 'Enable this feature if you want to provide for your students different types of reports regarding her learning performance. It includes reports on learning performance in the overall domainor on particular subjects as well as tests history.',
      type: studentsReports,
      switcher: switchStudentsReports,
      value: 'checkedA'
    },
    {
      img: teacher,
      title: 'Teacher Reports',
      description: 'Enable this feature if you want to visualize reports about the interaction, learning performance and other interesting reports about your students.',
      type: teacherReports,
      switcher: switchTeacherReports,
      value: 'checkedB'
    }
  ]
  return (
    <div style={{ justifyContent: 'center' }}>
      {/* <Typography className={classes.title} variant="subtitle1">
          This is the least step to customize your tutor!
    </Typography> */}
      <Typography className={classes.title} variant="subtitle1">
        You can also select which kind of reports the tutor will provide
      </Typography>

      {
        values.map((v, k) => {
          return (
            <StepsCard
              key={k}
              img={v.img}
              title={v.title}
              description={v.description}
              type={v.type}
              switcher={v.switcher}
              value={v.value}
            />
          )
        })
      }

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
