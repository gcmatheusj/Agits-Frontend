import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ActionCreators from '../../../redux/actions/tutor';

import curriculum from '../../../assets/curriculum.png';
import syllabusimg from '../../../assets/syllabus.png';

import StepsCard from './StepsCard'

const styles = theme => ({
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
});

const DefinePedagogicalModel = (props) => {
  const {
    classes, switchKnowledgetcs, knowledgetcs,
    syllabus, switchSyllabus
  } = props;

  const values = [
    {
      img: curriculum,
      title: 'Knowledge tracing and curriculum sequence',
      description: 'By default your customized tutor maskes use of current intelligent techniques that model students knowledge to accurately decide whichproblems it should give to students at any given time.',
      type: knowledgetcs,
      switcher: switchKnowledgetcs,
      value: 'checkedA'
    },
    {
      img: syllabusimg,
      title: 'Syllabus',
      description: 'Enable this feature if you want to manage the schedule and subjects on which your students will learn using the tutor',
      type: syllabus,
      switcher: switchSyllabus,
      value: 'checkedB'
    }
  ]

  return (
    <div style={{ justifyContent: 'center' }}>
      <Typography className={classes.title} variant="subtitle1">
        We use the most advanced techniques for providing an adaptive and intelligent tutor for
        your students!
        </Typography>

      {
        values.map((v, k) => {
          return (
            <StepsCard
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
